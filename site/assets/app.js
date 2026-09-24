(() => {
  'use strict';

  const state = {
    index: null,
    catalog: null,
    version: null,
    activeProfile: 'core',
    activeTab: 'packages',
    mediations: new Set(),
    networks: new Set(),
    options: { adx: false, ump: false, tiktok: false },
    networkSearch: ''
  };

  const elements = {};
  const originNames = { adseye: 'AdsEye', official: '官方', mirror: 'AdsEye 镜像' };
  let toastTimer = null;

  document.addEventListener('DOMContentLoaded', initialize);

  async function initialize() {
    bindElements();
    bindStaticEvents();

    try {
      state.index = await fetchJson('data/index.json');
      const query = new URLSearchParams(window.location.search);
      state.version = query.get('version') || state.index.latest;
      renderVersionOptions();
      await loadCatalog(state.version);
      restoreSelectionFromQuery(query);
      renderAll();
    } catch (error) {
      showFatalError(error);
    }
  }

  function bindElements() {
    [
      'version-select', 'profile-list', 'mediation-list', 'network-list', 'network-search',
      'select-all-networks', 'clear-networks', 'reset-button', 'option-adx', 'option-ump',
      'option-tiktok', 'tiktok-option-row', 'package-count', 'product-count', 'resource-count',
      'package-table-body', 'selection-title', 'selection-meta', 'catalog-status', 'swift-output',
      'markdown-output', 'resource-list', 'issue-list', 'copy-button', 'download-button', 'toast',
      'mobile-result-button'
    ].forEach((id) => { elements[id] = document.getElementById(id); });
  }

  function bindStaticEvents() {
    elements['version-select'].addEventListener('change', async (event) => {
      state.version = event.target.value;
      await loadCatalog(state.version);
      applyProfile('core');
      renderAll();
    });
    elements['network-search'].addEventListener('input', (event) => {
      state.networkSearch = event.target.value.trim().toLowerCase();
      renderNetworks();
    });
    elements['select-all-networks'].addEventListener('click', selectAllNetworks);
    elements['clear-networks'].addEventListener('click', () => {
      state.networks.clear();
      markCustom();
      renderAll();
    });
    elements['reset-button'].addEventListener('click', () => {
      applyProfile('core');
      renderAll();
    });
    elements['option-adx'].addEventListener('change', (event) => updateOption('adx', event.target.checked));
    elements['option-ump'].addEventListener('change', (event) => updateOption('ump', event.target.checked));
    elements['option-tiktok'].addEventListener('change', (event) => updateOption('tiktok', event.target.checked));
    elements['copy-button'].addEventListener('click', copyCurrentContent);
    elements['download-button'].addEventListener('click', downloadMarkdown);
    elements['mobile-result-button'].addEventListener('click', () => {
      document.querySelector('.output-panel').scrollIntoView({ behavior: 'smooth', block: 'start' });
    });

    document.querySelectorAll('.tab-button').forEach((button) => {
      button.addEventListener('click', () => activateTab(button.dataset.tab));
    });
  }

  async function loadCatalog(version) {
    state.catalog = await fetchJson(`data/${encodeURIComponent(version)}.json`);
    state.mediations.clear();
    state.networks.clear();
    state.options = { adx: false, ump: false, tiktok: false };
    state.activeProfile = 'core';
    state.networkSearch = '';
    elements['network-search'].value = '';
  }

  async function fetchJson(path) {
    const response = await fetch(path, { cache: 'no-cache' });
    if (!response.ok) throw new Error(`无法读取 ${path}（HTTP ${response.status}）`);
    return response.json();
  }

  function restoreSelectionFromQuery(query) {
    const requestedProfile = query.get('profile');
    if (requestedProfile && state.catalog.profiles[requestedProfile]) {
      applyProfile(requestedProfile);
      return;
    }

    const hasCustomState = query.has('mediations') || query.has('networks') || query.has('adx') || query.has('ump') || query.has('tiktok');
    if (!hasCustomState) {
      applyProfile('core');
      return;
    }

    state.activeProfile = null;
    state.mediations = parseSet(query.get('mediations'), state.catalog.mediations);
    state.networks = parseSet(query.get('networks'), state.catalog.networks);
    state.options.adx = query.get('adx') === '1';
    state.options.ump = query.get('ump') === '1';
    state.options.tiktok = query.get('tiktok') === '1';
  }

  function parseSet(value, allowedMap) {
    return new Set((value || '').split(',').filter((item) => Object.hasOwn(allowedMap, item)));
  }

  function applyProfile(name) {
    const profile = state.catalog.profiles[name];
    if (!profile) return;
    const profileGroups = new Set(profile.groups);
    state.activeProfile = name;
    state.mediations = new Set(Object.keys(state.catalog.mediations).filter((id) => profileGroups.has(id)));
    state.options.adx = profileGroups.has('adx');
    state.options.ump = profileGroups.has('support');
    state.options.tiktok = profileGroups.has('ads_global_tiktok');

    state.networks.clear();
    if (profileGroups.has('network')) {
      Object.entries(state.catalog.networks).forEach(([id, network]) => {
        if (networkContributes(network)) state.networks.add(id);
      });
    }
  }

  function networkContributes(network) {
    if ((network.sdk_packages || []).length > 0) return true;
    return [...state.mediations].some((id) => (network.adapters[id] || []).length > 0);
  }

  function selectAllNetworks() {
    Object.entries(state.catalog.networks).forEach(([id, network]) => {
      if (networkContributes(network)) state.networks.add(id);
    });
    markCustom();
    renderAll();
  }

  function updateOption(name, enabled) {
    state.options[name] = enabled;
    markCustom();
    renderAll();
  }

  function markCustom() { state.activeProfile = null; }

  function renderAll() {
    renderProfiles();
    renderMediations();
    renderNetworks();
    renderOptions();
    renderOutput();
    syncQuery();
  }

  function renderVersionOptions() {
    elements['version-select'].replaceChildren(...state.index.versions.map((item) => {
      const option = document.createElement('option');
      option.value = item.version;
      option.textContent = item.version === state.index.latest ? `${item.version}（推荐）` : item.version;
      option.selected = item.version === state.version;
      return option;
    }));
  }

  function renderProfiles() {
    const fragment = document.createDocumentFragment();
    Object.entries(state.catalog.profiles).forEach(([id, profile]) => {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = `profile-button${state.activeProfile === id ? ' is-active' : ''}`;
      button.textContent = profileButtonName(id, profile);
      button.title = profile.description || id;
      button.addEventListener('click', () => {
        applyProfile(id);
        renderAll();
      });
      fragment.appendChild(button);
    });
    elements['profile-list'].replaceChildren(fragment);
  }

  function profileButtonName(id, profile) {
    const names = { core: 'Core', core_adx: 'Core + ADX', applovin: 'AppLovin', topon: 'TopOn', tradplus: 'TradPlus', admob: 'AdMob', full: '全量验证' };
    return names[id] || profile.description || id;
  }

  function renderMediations() {
    const fragment = document.createDocumentFragment();
    Object.entries(state.catalog.mediations).forEach(([id, mediation]) => {
      const row = document.createElement('label');
      row.className = 'option-row';
      const input = document.createElement('input');
      input.type = 'checkbox';
      input.checked = state.mediations.has(id);
      input.addEventListener('change', () => {
        input.checked ? state.mediations.add(id) : state.mediations.delete(id);
        markCustom();
        renderAll();
      });
      const text = document.createElement('span');
      const strong = document.createElement('strong');
      strong.textContent = mediation.name;
      const small = document.createElement('small');
      small.textContent = `${mediation.packages.length} 个基础 Product`;
      text.append(strong, small);
      row.append(input, text);
      fragment.appendChild(row);
    });
    elements['mediation-list'].replaceChildren(fragment);
  }

  function renderNetworks() {
    const fragment = document.createDocumentFragment();
    let visibleCount = 0;

    Object.entries(state.catalog.networks).forEach(([id, network]) => {
      const searchable = `${id} ${network.name}`.toLowerCase();
      if (state.networkSearch && !searchable.includes(state.networkSearch)) return;
      visibleCount += 1;

      const row = document.createElement('label');
      row.className = 'network-row';
      const input = document.createElement('input');
      input.type = 'checkbox';
      input.checked = state.networks.has(id);
      input.addEventListener('change', () => {
        input.checked ? state.networks.add(id) : state.networks.delete(id);
        markCustom();
        renderAll();
      });

      const content = document.createElement('span');
      content.className = 'network-content';
      const heading = document.createElement('span');
      heading.className = 'network-name';
      const name = document.createElement('span');
      name.textContent = network.name;
      const adapterCount = document.createElement('span');
      adapterCount.className = 'adapter-count';
      const count = selectedAdapterIds(network).length;
      adapterCount.textContent = `${count} Adapter`;
      heading.append(name, adapterCount);

      const tags = document.createElement('span');
      tags.className = 'network-tags';
      [...state.mediations].forEach((mediationId) => {
        const tag = document.createElement('span');
        tag.className = 'network-tag';
        const supported = (network.adapters[mediationId] || []).length > 0;
        tag.textContent = `${state.catalog.mediations[mediationId].name}${supported ? '' : ' · 无 Adapter'}`;
        tags.appendChild(tag);
      });
      content.append(heading, tags);
      row.append(input, content);
      fragment.appendChild(row);
    });

    if (visibleCount === 0) {
      const empty = document.createElement('div');
      empty.className = 'network-empty';
      empty.textContent = '没有匹配的网络';
      fragment.appendChild(empty);
    }
    elements['network-list'].replaceChildren(fragment);
  }

  function selectedAdapterIds(network) {
    return [...state.mediations].flatMap((id) => network.adapters[id] || []);
  }

  function renderOptions() {
    elements['option-adx'].checked = state.options.adx;
    elements['option-ump'].checked = state.options.ump;
    const pangleSelected = state.networks.has('pangle');
    elements['option-tiktok'].disabled = !pangleSelected;
    elements['option-tiktok'].checked = pangleSelected && state.options.tiktok;
    elements['tiktok-option-row'].classList.toggle('is-disabled', !pangleSelected);
    if (!pangleSelected) state.options.tiktok = false;
  }

  function computeSelection() {
    const selectedIds = new Set(['AdsEyeAdSDK']);
    if (state.options.adx) selectedIds.add('AdsEyeADXSDK');
    if (state.options.ump) selectedIds.add('GoogleUserMessagingPlatform');
    if (state.options.tiktok) selectedIds.add('AdsGlobalTikTokBusinessSDK');

    state.mediations.forEach((id) => {
      state.catalog.mediations[id].packages.forEach((packageId) => selectedIds.add(packageId));
    });
    state.networks.forEach((id) => {
      const network = state.catalog.networks[id];
      network.sdk_packages.forEach((packageId) => selectedIds.add(packageId));
      selectedAdapterIds(network).forEach((packageId) => selectedIds.add(packageId));
    });

    const packages = state.catalog.packages.filter((item) => selectedIds.has(item.id));
    const resources = state.catalog.resources.filter((item) => (item.trigger_packages || []).some((id) => selectedIds.has(id)));
    const knownIssues = (state.catalog.known_issues || []).filter((item) => (item.trigger_packages || []).some((id) => selectedIds.has(id)));
    return { selectedIds, packages, resources, knownIssues };
  }

  function renderOutput() {
    const selection = computeSelection();
    elements['package-count'].textContent = selection.packages.length;
    elements['product-count'].textContent = selection.packages.reduce((total, item) => total + item.products.length, 0);
    elements['resource-count'].textContent = selection.resources.length;
    elements['selection-title'].textContent = selectionTitle();
    elements['selection-meta'].textContent = `AdsEye iOS ${state.catalog.sdk.version} · iOS ${state.catalog.sdk.minimum_ios}+ · 精确版本`;
    elements['catalog-status'].textContent = state.catalog.sdk.catalog_tag;
    renderPackageTable(selection.packages);
    renderResources(selection.resources);
    renderIssues(selection.knownIssues);
    elements['swift-output'].textContent = buildSwiftSnippet(selection.packages);
    elements['markdown-output'].textContent = buildMarkdown(selection);
  }

  function selectionTitle() {
    const mediationNames = [...state.mediations].map((id) => state.catalog.mediations[id].name);
    return mediationNames.length > 0 ? `AdsEye Core + ${mediationNames.join(' + ')}` : 'AdsEye Core';
  }

  function renderPackageTable(packages) {
    const fragment = document.createDocumentFragment();
    packages.forEach((item) => {
      const row = document.createElement('tr');
      const packageCell = document.createElement('td');
      const link = document.createElement('a');
      link.className = 'package-link';
      link.href = item.url;
      link.target = '_blank';
      link.rel = 'noreferrer';
      link.textContent = item.id;
      packageCell.appendChild(link);

      const versionCell = document.createElement('td');
      versionCell.textContent = item.version;
      const productCell = document.createElement('td');
      item.products.forEach((product) => {
        const label = document.createElement('span');
        label.className = 'product-name';
        label.textContent = product;
        productCell.appendChild(label);
      });
      const originCell = document.createElement('td');
      originCell.className = 'origin-label';
      originCell.textContent = originNames[item.origin] || item.origin;
      row.append(packageCell, versionCell, productCell, originCell);
      fragment.appendChild(row);
    });
    elements['package-table-body'].replaceChildren(fragment);
  }

  function renderResources(resources) {
    if (resources.length === 0) {
      elements['resource-list'].replaceChildren(emptyResult('当前组合没有 App 根目录资源'));
      return;
    }
    elements['resource-list'].replaceChildren(...resources.map((item) => {
      const row = document.createElement('div');
      row.className = 'resource-row';
      const title = document.createElement('strong');
      title.textContent = item.bundle;
      const path = document.createElement('code');
      path.textContent = `YourApp.app/${item.bundle}`;
      const meta = document.createElement('p');
      meta.className = 'resource-meta';
      meta.textContent = `${item.source_package} · ${item.source_path}`;
      row.append(title, path, meta);
      return row;
    }));
  }

  function renderIssues(issues) {
    if (issues.length === 0) {
      elements['issue-list'].replaceChildren(emptyResult('当前组合没有已知接入事项'));
      return;
    }
    elements['issue-list'].replaceChildren(...issues.map((item) => {
      const row = document.createElement('div');
      row.className = 'issue-row';
      const title = document.createElement('strong');
      title.textContent = item.title;
      const description = document.createElement('p');
      description.textContent = item.description;
      row.append(title, description);
      return row;
    }));
  }

  function emptyResult(message) {
    const empty = document.createElement('div');
    empty.className = 'empty-result';
    empty.textContent = message;
    return empty;
  }

  function buildSwiftSnippet(packages) {
    const dependencyLines = packages.map((item) => `    .package(url: "${item.url}", exact: "${item.version}"),`);
    const productLines = packages.flatMap((item) => item.products.map((product) =>
      `    .product(name: "${product}", package: "${packageIdentity(item.url)}"),`
    ));
    return `dependencies: [\n${dependencyLines.join('\n')}\n]\n\n// App target dependencies\n[\n${productLines.join('\n')}\n]`;
  }

  function buildMarkdown(selection) {
    const lines = [
      `# AdsEye iOS SDK ${state.catalog.sdk.version} SPM 接入清单`,
      '',
      `接入组合：${selectionTitle()}`,
      `最低系统：iOS ${state.catalog.sdk.minimum_ios}`,
      '',
      '## 接入规则',
      '',
      '1. 在 Xcode 中通过 File > Add Package Dependencies 添加下表仓库。',
      '2. 使用精确版本，并将 Product 直接添加到 App target。',
      '3. Other Linker Flags 保留 $(inherited) -ObjC。',
      '4. 资源 bundle 必须复制到 App 根目录。',
      '',
      '## Package',
      '',
      '| Package | 版本 | Product | URL |',
      '| --- | --- | --- | --- |'
    ];
    selection.packages.forEach((item) => {
      lines.push(`| ${item.id} | ${item.version} | ${item.products.join(', ')} | ${item.url} |`);
    });
    lines.push('', '## App 根目录资源', '');
    if (selection.resources.length === 0) {
      lines.push('无。');
    } else {
      selection.resources.forEach((item) => lines.push(`- ${item.bundle}：${item.source_package}/${item.source_path}`));
    }
    lines.push('', '## 已知事项', '');
    if (selection.knownIssues.length === 0) {
      lines.push('无。');
    } else {
      selection.knownIssues.forEach((item) => lines.push(`- ${item.title}：${item.description}`));
    }
    return `${lines.join('\n')}\n`;
  }

  function packageIdentity(url) {
    return url.replace(/\/+$/, '').split('/').pop().replace(/\.git$/, '').toLowerCase();
  }

  function activateTab(tab) {
    state.activeTab = tab;
    document.querySelectorAll('.tab-button').forEach((button) => {
      const active = button.dataset.tab === tab;
      button.classList.toggle('is-active', active);
      button.setAttribute('aria-selected', String(active));
    });
    document.querySelectorAll('.tab-panel').forEach((panel) => {
      const active = panel.id === `panel-${tab}`;
      panel.classList.toggle('is-active', active);
      panel.hidden = !active;
    });
  }

  async function copyCurrentContent() {
    const selection = computeSelection();
    const content = state.activeTab === 'swift' ? buildSwiftSnippet(selection.packages) : buildMarkdown(selection);
    try {
      await navigator.clipboard.writeText(content);
      showToast('已复制');
    } catch (_error) {
      const textarea = document.createElement('textarea');
      textarea.value = content;
      textarea.style.position = 'fixed';
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      textarea.remove();
      showToast('已复制');
    }
  }

  function downloadMarkdown() {
    const content = buildMarkdown(computeSelection());
    const blob = new Blob([content], { type: 'text/markdown;charset=utf-8' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `AdsEye-iOS-${state.catalog.sdk.version}-${selectionSlug()}.md`;
    link.click();
    URL.revokeObjectURL(link.href);
  }

  function selectionSlug() {
    return state.activeProfile || [...state.mediations].sort().join('-') || 'core';
  }

  function syncQuery() {
    const query = new URLSearchParams();
    query.set('version', state.version);
    if (state.activeProfile) {
      query.set('profile', state.activeProfile);
    } else {
      if (state.mediations.size) query.set('mediations', [...state.mediations].sort().join(','));
      if (state.networks.size) query.set('networks', [...state.networks].sort().join(','));
      if (state.options.adx) query.set('adx', '1');
      if (state.options.ump) query.set('ump', '1');
      if (state.options.tiktok) query.set('tiktok', '1');
    }
    window.history.replaceState(null, '', `${window.location.pathname}?${query.toString()}`);
  }

  function showToast(message) {
    elements.toast.textContent = message;
    elements.toast.classList.add('is-visible');
    window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(() => elements.toast.classList.remove('is-visible'), 1600);
  }

  function showFatalError(error) {
    elements['catalog-status'].textContent = '加载失败';
    elements['catalog-status'].style.background = '#fdebea';
    elements['catalog-status'].style.color = '#b2362d';
    elements['package-table-body'].replaceChildren();
    showToast(error.message || '页面数据加载失败');
  }
})();
