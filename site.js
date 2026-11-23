/* HarnessBuilder site — bilingual copy + interactions. No external requests. */
(function () {
  'use strict';

  var I18N = {
    zh: {
      'meta.title': 'HarnessBuilder — 私有化部署的 Agent Harness',
      'meta.desc': 'HarnessBuilder 是私有化部署的场景化 Agent Harness：五个 CLI 内核统一为一个接口，身份、策略、密钥与模型路由留在客户自己的服务器。',
      'a11y.skip': '跳到正文',
      'a11y.lang': '界面语言',
      'a11y.copy': '复制命令',
      'brand.ver': 'v0.3.1',
      'nav.why': '为什么', 'nav.arch': '架构', 'nav.ui': '界面', 'nav.security': '安全', 'nav.download': '下载',
      'nav.cta': '下载客户端', 'nav.github': 'BuildHarness GitHub 组织',
      'hero.kicker': '私有化部署的 Agent Harness', 'hero.kickerMeta': '协议 1.2.0',
      'hero.title': 'Agent 在用户机器上，<br><em>控制权</em>留在你的机房。',
      'hero.lede': '身份、策略、密钥与模型路由留在客户自己的服务器。opencode、codex、gemini、goose、Claude Code 五个内核统一为一个可替换接口；会话、工作区与账本留在本机。',
      'hero.ctaDownload': '下载客户端', 'hero.ctaSecurity': '看边界怎么切',
      'hero.stat1': '可替换内核', 'hero.stat2': '设备令牌有效期', 'hero.stat3': '客户端持有的 provider key', 'hero.stat4': '控制面密钥加密',
      'hero.term.status': '账本已校验',
      'hero.term.l1': 'harnessbuilder-client init --server 10.0.0.10',
      'hero.term.l2': '设备已接入 · scoped token 15 分钟',
      'hero.term.l3': 'harnessbuilder-client start',
      'hero.term.l4a': 'runtime', 'hero.term.l4b': '127.0.0.1:8788 · 仅本机回环',
      'hero.term.l5a': 'gateway', 'hero.term.l5b': '策略 force_all → demo-model',
      'hero.term.l6a': 'kernel', 'hero.term.l6b': 'opencode · workspace ~/work',
      'hero.term.l7a': 'ledger', 'hero.term.l7b': 'sha256 链 · 3 个事件',
      'hero.term.keyLabel': '上游 PROVIDER KEY',
      'hero.term.keyNote': '从不进入客户端、内核或日志',
      'hero.term.boundary': '信任边界',
      'hero.term.server': '服务端：身份 · 策略签名 · 路由 · 计量',
      'why.kicker': '为什么是 HarnessBuilder',
      'why.title': '不是一个聊天框，<br>是一台<em>装在客户内网</em>的 harness。',
      'why.lede': '把五个 CLI 内核、策略、路由、计费与审计收束成一套可私有化交付的运行时。每一层边界都写死在代码里，而不是写在部署文档里。',
      'why.1.title': '密钥只在控制面',
      'why.1.body': '上游 provider key 以 AES-256-GCM 加密保存在客户自己的控制面，只在转发请求时于进程内存解密。客户端、子进程、日志、错误信息与 UI 都拿不到明文。',
      'why.1.tag': 'KEY BOUNDARY',
      'why.2.title': '执行发生在用户机器',
      'why.2.body': '内核进程、工作区、会话库与会话账本都在本机。控制面只接收策略、路由与计量所需的元数据，不做遥测，也不上传整库。',
      'why.2.tag': 'LOCAL FIRST',
      'why.3.title': '五个内核，一个接口',
      'why.3.body': 'opencode、codex、gemini、goose、Claude Code 统一归一化为 KernelEvent。内核能力不足时诚实降级并声明，不把原生 JSON 透传给运行时或界面。',
      'why.3.tag': 'KERNEL SDK',
      'why.4.title': '路由、配额、计费、审计',
      'why.4.body': '网关把 OpenAI、Anthropic Messages 与 Gemini 协议翻译到同一路由；harness 版本可用 kernelLock 固定内核。每次调用进入追加式哈希账本。',
      'why.4.tag': 'GATEWAY',
      'why.5.title': '工作流即版本化代码',
      'why.5.body': '图必须是有向无环图，模板与 JSONLogic 条件是严格子集；map 分发、approval 暂停、output 终点。账本只写 prompt 哈希与状态，不写原文。',
      'why.5.tag': 'WORKFLOW V1',
      'why.6.title': '两种模式，同一条边界',
      'why.6.body': 'managed 模式下管理员用 Ed25519 私钥下发签名策略；standalone 模式把策略与密钥留在本机，provider key 只写 OS 凭据库，没有凭据库就报错。',
      'why.6.tag': 'MANAGED / STANDALONE',
      'arch.kicker': '边界',
      'arch.title': '一条边界，<em>两种机器</em>。',
      'arch.lede': '模型请求从本机回环代理出发，经控制面网关转发到上游；真实 key 只存在于网关进程。内核拿到的永远只是占位 token。',
      'arch.serverTitle': '你的服务器', 'arch.serverTag': 'CONTROL PLANE',
      'arch.s1': '身份、角色与设备凭据', 'arch.s2': 'Ed25519 签名策略，修订只增不覆盖',
      'arch.s3': 'Provider 密钥 AES-256-GCM 加密', 'arch.s4': '模型路由、配额与计费', 'arch.s5': '计量、审计与备份密文',
      'arch.machineTitle': '用户机器', 'arch.machineTag': 'LOCAL RUNTIME',
      'arch.m1': '五个 Agent 内核，独立工作区', 'arch.m2': '本机 SQLite 会话库与哈希链账本',
      'arch.m3': 'loopback egress proxy 持有短期令牌', 'arch.m4': '技能快照、记忆审批、加密备份', 'arch.m5': '网络策略 fail-closed，deny 优先',
      'arch.flowTop': 'scoped token · 15 min', 'arch.flowBottom': '仅经 loopback proxy',
      'arch.boundary': 'TRUST BOUNDARY',
      'arch.note': '客户端只有两类凭据：0600 的 device credential，与可独立吊销的网关 API Key（hbk_…）。两者都只代表一台设备。',
      'ui.kicker': '界面',
      'ui.title': '界面就在本机，<br>中英<em>一键切换</em>。',
      'ui.lede': '本机 runtime 内置聊天与控制界面，管理控制台运行在你的服务器。两套 UI 都支持中文 / English，选择保存在浏览器里，刷新后保持。',
      'ui.tab1': '本机对话', 'ui.tab2': '技能快照', 'ui.tab3': '控制台概览', 'ui.tab4': 'Harness 版本', 'ui.tab5': '技能市场',
      'ui.cap1.title': '会话、内核与账本都在本机',
      'ui.cap1.body': '切换内核、查看文件、连接信息、记忆、技能、备份与账本校验，全部来自 127.0.0.1:8788。',
      'ui.cap2.title': '技能在新建会话时取快照',
      'ui.cap2.body': '管理员分配的技能包物化为纯 Markdown 写入工作区；已有会话保持创建时的快照，不回写。',
      'ui.cap3.title': '用量、成本与路由健康',
      'ui.cap3.body': '请求量、token、成本与延迟按用户呈现，路由与设备健康在同一屏里。',
      'ui.cap4.title': 'Harness 版本不可变',
      'ui.cap4.body': '管理员发布版本并分配；权限求交决定会话能使用哪些内核与工具，固定的内核在 UI 中置灰。',
      'ui.cap5.title': '先审核，再分配',
      'ui.cap5.body': '技能草稿等待审核，通过后按包分配给用户；会话创建时才取快照。',
      'ui.alt1': '本机聊天界面：用户、内核选择与会话列表',
      'ui.alt2': '本机技能界面：已安装技能与内容预览',
      'ui.alt3': '管理控制台概览：请求、用量、成本与健康状态',
      'ui.alt4': 'Harness 版本管理：版本、内核锁定与权限',
      'ui.alt5': '技能市场：可审核与分配的技能包',
      'ui.note': '技能在新建会话时取快照；语言选择写入 localStorage，动态状态消息按规则匹配翻译。',
      'wf.kicker': '工作流',
      'wf.title': '需要人拍板的节点，<br>就<em>停在那里</em>。',
      'wf.lede': 'approval 节点让运行暂停在 awaiting_approval，等真正的负责人批准后再续跑。批准与拒绝都进入哈希账本，但账本不存 prompt 与输入原文。',
      'wf.p1': 'map：逐行分发，单条失败不静默', 'wf.p2': 'approval：暂停、批准、拒绝、续跑', 'wf.p3': 'output：恰好一个终点，JSON Schema 校验',
      'wf.bar': '终端 · 工作流审批',
      'wf.l1': '# 退出码 2：等待审批', 'wf.l2': '"Approve 2 rows?"',
      'wf.l3': '已批准，继续执行 · 6/6 节点成功',
      'wf.l4a': 'ledger', 'wf.l4b': 'workflow_approval_requested → workflow_approval_decided',
      'wf.note': '--json 时 stdout 只保留结构化结果，人类可读消息走 stderr；脚本可以直接解析。',
      'sec.kicker': '安全',
      'sec.title': '六条<em>不可协商</em>的约束。',
      'sec.lede': '这些不是可选项，也不是配置文档里的建议：实现、测试与 UI 都按同一套语义收敛。',
      'sec.1.title': '密钥边界', 'sec.1.body': '客户端只有 0600 的 device credential 与可独立吊销的网关 Key；内核只拿到 loopback 占位 token。',
      'sec.2.title': '15 分钟令牌', 'sec.2.body': '设备凭据换取 scoped token，只在 loopback 代理进程内存里存在，不落盘、不进环境变量。',
      'sec.3.title': 'Fail-closed 网络', 'sec.3.body': 'deny 优先于任何模式；厂商与遥测域名强制拦截。已存策略无法解析时按 deny-all 执行。',
      'sec.4.title': '加密备份', 'sec.4.body': '客户端分块加密后再上传；控制面只保存密文、密文哈希、大小与时间，默认无法解密。',
      'sec.5.title': '哈希链账本', 'sec.5.body': '会话与工作流事件追加写链，审批请求与决定都入账；历史不可修改或删除。',
      'sec.6.title': '签名策略', 'sec.6.body': 'Ed25519 私钥签名，修订只增不覆盖；设备固定公钥，旧修订以 policy_rollback 拒绝。',
      'dl.kicker': '下载',
      'dl.title': '把它装进<em>客户的内网</em>。',
      'dl.lede': '客户端是一个自包含的 Node.js bundle（需要 Node 22+）。安装时输入控制面地址，以及管理员签发的一次性接入令牌。',
      'dl.osUnix': 'Node 22+', 'dl.osWin': 'Node 22+ · PowerShell',
      'dl.macDesc': '安装到 ~/.local/bin，接入设备并启动本机 runtime。',
      'dl.winDesc': '安装到 %LOCALAPPDATA%\\harnessbuilder，写入用户 PATH 并创建命令入口。',
      'dl.manualTitle': '手动下载', 'dl.manualDesc': '直接取 tarball 与校验和，适合离线分发与内网镜像。',
      'dl.tarball': 'harnessbuilder-client.tar.gz', 'dl.notes': '全部版本与发行说明', 'dl.copy': '复制',
      'dl.copied': '已复制',
      'dl.step1.title': '运行安装器', 'dl.step1.body': '自动下载、校验 SHA256 并解包；失败即停止，不留下半装状态。',
      'dl.step2.title': '接入设备', 'dl.step2.body': '输入控制面 IP / URL 与一次性 enrollment token；裸 IP 按 http://<ip>:8787 解释。',
      'dl.step3.title': '打开界面', 'dl.step3.body': '运行 harnessbuilder-client start，打开 http://127.0.0.1:8788。',
      'dl.note': 'Agent 内核（opencode / codex / gemini / goose / claude）按需另装，客户端不捆绑上游 CLI；桌面外壳需按平台签名，签名制品与离线安装包由客户证书环境生成。',
      'faq.kicker': '常见问题',
      'faq.title': '交付前会问的<em>几件事</em>。',
      'faq.q1': '客户端会把代码或对话上传吗？',
      'faq.a1': '不会。会话与工作区留在本机 SQLite 与文件系统，没有遥测。备份是显式可选项：管理员与用户都开启后，客户端在本机加密再上传，服务器只拿到密文。',
      'faq.q2': '必须能访问公网吗？',
      'faq.a2': 'managed 模式下客户端只连客户自己的控制面网关，由网关访问上游模型。standalone 模式直接连 OpenAI 兼容端点，provider key 只写 OS 凭据库。网络策略 deny 优先，厂商与遥测域名被强制拦截。',
      'faq.q3': '支持哪些操作系统？',
      'faq.a3': 'macOS、Linux 与 Windows 10/11，要求 Node.js 22+。界面提供中英切换。Windows 上 0600 不等于 ACL，建议把数据目录放在每用户 profile 并启用磁盘加密。',
      'faq.q4': '桌面外壳和离线安装包呢？',
      'faq.a4': 'Tauri 外壳按平台单独签名分发；签名与公证依赖客户的证书环境。源码保持私有，公开的只有本站与发布制品。',
      'foot.tag': '私有化部署 · 源码不公开 · 制品公开下载',
      'foot.download': '下载', 'foot.downloads': '制品仓库', 'foot.github': 'GitHub 组织',
      'foot.ver': '协议 1.2.0 · 客户端 0.3.1'
    },
    en: {
      'meta.title': 'HarnessBuilder — a private-deployment agent harness',
      'meta.desc': 'HarnessBuilder is a scenario-oriented agent harness for private deployment: five CLI kernels behind one interface, with identity, policy, keys and model routing on the customer’s own server.',
      'a11y.skip': 'Skip to content',
      'a11y.lang': 'Interface language',
      'a11y.copy': 'Copy command',
      'brand.ver': 'v0.3.1',
      'nav.why': 'Why', 'nav.arch': 'Architecture', 'nav.ui': 'Interface', 'nav.security': 'Security', 'nav.download': 'Download',
      'nav.cta': 'Download client', 'nav.github': 'BuildHarness on GitHub',
      'hero.kicker': 'Private-deployment agent harness', 'hero.kickerMeta': 'Protocol 1.2.0',
      'hero.title': 'The agent runs on their machines.<br>The <em>control plane</em> stays on yours.',
      'hero.lede': 'Identity, policy, keys and model routing stay on the customer’s own server. opencode, codex, gemini, goose and Claude Code sit behind one replaceable interface; sessions, workspaces and ledgers stay on the machine.',
      'hero.ctaDownload': 'Download client', 'hero.ctaSecurity': 'See where the boundary sits',
      'hero.stat1': 'interchangeable kernels', 'hero.stat2': 'device token lifetime', 'hero.stat3': 'provider keys on the client', 'hero.stat4': 'control-plane key encryption',
      'hero.term.status': 'ledger verified',
      'hero.term.l1': 'harnessbuilder-client init --server 10.0.0.10',
      'hero.term.l2': 'Device enrolled · scoped token 15 min',
      'hero.term.l3': 'harnessbuilder-client start',
      'hero.term.l4a': 'runtime', 'hero.term.l4b': '127.0.0.1:8788 · loopback only',
      'hero.term.l5a': 'gateway', 'hero.term.l5b': 'policy force_all → demo-model',
      'hero.term.l6a': 'kernel', 'hero.term.l6b': 'opencode · workspace ~/work',
      'hero.term.l7a': 'ledger', 'hero.term.l7b': 'sha256 chain · 3 events',
      'hero.term.keyLabel': 'UPSTREAM PROVIDER KEY',
      'hero.term.keyNote': 'never reaches the client, kernel or logs',
      'hero.term.boundary': 'TRUST BOUNDARY',
      'hero.term.server': 'Server side: identity · signed policy · routing · metering',
      'why.kicker': 'Why HarnessBuilder',
      'why.title': 'Not another chat box.<br>A harness that lives <em>inside the customer’s network</em>.',
      'why.lede': 'Five CLI kernels, policy, routing, billing and audit collapsed into one runtime you can ship on-prem. Every boundary is enforced in code, not in a deployment note.',
      'why.1.title': 'Keys never leave the control plane',
      'why.1.body': 'Upstream provider keys are sealed with AES-256-GCM on the customer’s own control plane and decrypted only in process memory while forwarding. Clients, child processes, logs, error messages and the UI never see plaintext.',
      'why.1.tag': 'KEY BOUNDARY',
      'why.2.title': 'Execution stays on the machine',
      'why.2.body': 'Kernel processes, workspaces, the session store and the ledger live on the user’s machine. The control plane receives only the metadata needed for policy, routing and metering — no telemetry, no whole-database upload.',
      'why.2.tag': 'LOCAL FIRST',
      'why.3.title': 'Five kernels, one interface',
      'why.3.body': 'opencode, codex, gemini, goose and Claude Code normalise into KernelEvent. When a kernel cannot do something, the adapter declares the gap instead of passing native JSON through to the runtime or UI.',
      'why.3.tag': 'KERNEL SDK',
      'why.4.title': 'Routing, quota, metering, audit',
      'why.4.body': 'The gateway translates OpenAI, Anthropic Messages and Gemini protocols onto one route; a harness version can pin a kernel with kernelLock. Every call lands in an append-only hash-chained ledger.',
      'why.4.tag': 'GATEWAY',
      'why.5.title': 'Workflows as versioned code',
      'why.5.body': 'The graph must be a DAG, templates and JSONLogic conditions are a strict subset; map fans out, approval pauses, output terminates. The ledger records prompt hashes and states, never the text.',
      'why.5.tag': 'WORKFLOW V1',
      'why.6.title': 'Two modes, one boundary',
      'why.6.body': 'In managed mode an administrator signs policy with an Ed25519 private key; in standalone mode policy and keys stay local and the provider key goes only to the OS credential store — no store, no fallback.',
      'why.6.tag': 'MANAGED / STANDALONE',
      'arch.kicker': 'The boundary',
      'arch.title': 'One boundary, <em>two machines</em>.',
      'arch.lede': 'Model requests leave through a loopback proxy on the machine and are forwarded by the control-plane gateway. The real key exists only inside the gateway process; kernels only ever see a placeholder token.',
      'arch.serverTitle': 'Your server', 'arch.serverTag': 'CONTROL PLANE',
      'arch.s1': 'Identity, roles and device credentials', 'arch.s2': 'Ed25519-signed policy, append-only revisions',
      'arch.s3': 'Provider keys sealed with AES-256-GCM', 'arch.s4': 'Model routing, quota and billing', 'arch.s5': 'Metering, audit and backup ciphertext',
      'arch.machineTitle': 'User machine', 'arch.machineTag': 'LOCAL RUNTIME',
      'arch.m1': 'Five agent kernels, isolated workspaces', 'arch.m2': 'Local SQLite sessions and hash-chained ledger',
      'arch.m3': 'Loopback egress proxy holds the short-lived token', 'arch.m4': 'Skill snapshots, memory review, encrypted backup', 'arch.m5': 'Network policy fails closed; deny wins',
      'arch.flowTop': 'scoped token · 15 min', 'arch.flowBottom': 'via loopback proxy only',
      'arch.boundary': 'TRUST BOUNDARY',
      'arch.note': 'The client holds exactly two credentials: a 0600 device credential and an independently revocable gateway API key (hbk_…). Both represent a single device.',
      'ui.kicker': 'Interface',
      'ui.title': 'The interface is local —<br>and <em>switches language</em> in one click.',
      'ui.lede': 'The local runtime ships its own chat and control UI; the admin console runs on your server. Both support Chinese and English, remembered in the browser across reloads.',
      'ui.tab1': 'Local chat', 'ui.tab2': 'Skill snapshots', 'ui.tab3': 'Console overview', 'ui.tab4': 'Harness versions', 'ui.tab5': 'Skill marketplace',
      'ui.cap1.title': 'Sessions, kernels and ledger on the machine',
      'ui.cap1.body': 'Switch kernels, inspect files, connection, memory, skills, backups and ledger verification — all from 127.0.0.1:8788.',
      'ui.cap2.title': 'Skills are snapshotted at session creation',
      'ui.cap2.body': 'Curated packs are materialised as plain Markdown in the workspace; existing sessions keep the snapshot they started with.',
      'ui.cap3.title': 'Usage, cost and route health',
      'ui.cap3.body': 'Requests, tokens, spend and latency per user, with route and device health on the same screen.',
      'ui.cap4.title': 'Harness versions are immutable',
      'ui.cap4.body': 'Admins publish and assign versions; permission intersection decides which kernels and tools a session may use, and pinned kernels are greyed out.',
      'ui.cap5.title': 'Review first, assign second',
      'ui.cap5.body': 'Skill drafts wait for review, then are assigned as packs per user; the snapshot is taken when a session is created.',
      'ui.alt1': 'Local chat: user, kernel picker and session list',
      'ui.alt2': 'Local skills: installed skills and a content preview',
      'ui.alt3': 'Admin console overview: requests, usage, cost and health',
      'ui.alt4': 'Harness versions: versions, kernel lock and permissions',
      'ui.alt5': 'Skill marketplace: packs ready to review and assign',
      'ui.note': 'Skills are snapshotted when a session is created; the language choice is stored in localStorage and dynamic status messages are translated by rule.',
      'wf.kicker': 'Workflows',
      'wf.title': 'Nodes that need a human<br><em>stop right there</em>.',
      'wf.lede': 'An approval node parks the run in awaiting_approval and resumes only after the accountable person decides. Approvals and rejections enter the hash-chained ledger — without the prompt or input text.',
      'wf.p1': 'map: fan out per row, failures never silent', 'wf.p2': 'approval: pause, approve, reject, resume', 'wf.p3': 'output: exactly one terminal node, schema-checked',
      'wf.bar': 'terminal · workflow approval',
      'wf.l1': '# exit code 2: waiting for approval', 'wf.l2': '"Approve 2 rows?"',
      'wf.l3': 'Approved, resuming · 6/6 nodes succeeded',
      'wf.l4a': 'ledger', 'wf.l4b': 'workflow_approval_requested → workflow_approval_decided',
      'wf.note': '--json keeps stdout machine-readable; human messages go to stderr, so scripts can parse it directly.',
      'sec.kicker': 'Security',
      'sec.title': 'Six <em>non-negotiable</em> constraints.',
      'sec.lede': 'These are not options in a config file. Implementation, tests and UI all converge on the same semantics.',
      'sec.1.title': 'Key boundary', 'sec.1.body': 'The client only holds a 0600 device credential and an independently revocable gateway key; kernels only see a loopback placeholder token.',
      'sec.2.title': '15-minute tokens', 'sec.2.body': 'The device credential buys a scoped token that lives only in the loopback proxy’s memory — never on disk, never in environment variables.',
      'sec.3.title': 'Fail-closed network', 'sec.3.body': 'Deny beats any mode; vendor and telemetry domains are blocked. A stored policy that cannot be parsed runs as deny-all.',
      'sec.4.title': 'Encrypted backups', 'sec.4.body': 'The client encrypts chunks before upload; the control plane stores only ciphertext, its hash, size and time, and cannot decrypt by default.',
      'sec.5.title': 'Hash-chained ledger', 'sec.5.body': 'Session and workflow events are appended to a hash chain; approval requests and decisions are recorded, and history cannot be edited or deleted.',
      'sec.6.title': 'Signed policy', 'sec.6.body': 'Ed25519 signatures, append-only revisions. Devices pin the public key and reject older revisions with policy_rollback.',
      'dl.kicker': 'Download',
      'dl.title': 'Ship it <em>into the customer’s network</em>.',
      'dl.lede': 'The client is a self-contained Node.js bundle (Node 22+). At install time you enter the control-plane address and a one-time enrollment token issued by the administrator.',
      'dl.osUnix': 'Node 22+', 'dl.osWin': 'Node 22+ · PowerShell',
      'dl.macDesc': 'Installs to ~/.local/bin, enrolls the device and starts the local runtime.',
      'dl.winDesc': 'Installs to %LOCALAPPDATA%\\harnessbuilder, writes the user PATH and creates the command shim.',
      'dl.manualTitle': 'Manual download', 'dl.manualDesc': 'Take the tarball and checksums directly — for offline distribution and internal mirrors.',
      'dl.tarball': 'harnessbuilder-client.tar.gz', 'dl.notes': 'All versions and release notes', 'dl.copy': 'Copy',
      'dl.copied': 'Copied',
      'dl.step1.title': 'Run the installer', 'dl.step1.body': 'Downloads, verifies SHA256 and unpacks; any failure stops before half-installing anything.',
      'dl.step2.title': 'Enroll the device', 'dl.step2.body': 'Enter the control-plane IP / URL and a one-time enrollment token; a bare IP means http://<ip>:8787.',
      'dl.step3.title': 'Open the UI', 'dl.step3.body': 'Run harnessbuilder-client start and open http://127.0.0.1:8788.',
      'dl.note': 'Agent kernels (opencode / codex / gemini / goose / claude) are installed separately; the client does not bundle upstream CLIs. The desktop shell is signed per platform; signed builds and offline installers are produced in the customer’s certificate environment.',
      'faq.kicker': 'FAQ',
      'faq.title': 'A few things <em>every buyer asks</em>.',
      'faq.q1': 'Does the client upload code or conversations?',
      'faq.a1': 'No. Sessions and workspaces stay in local SQLite and the filesystem; there is no telemetry. Backup is explicit: only after the admin and the user both enable it does the client encrypt locally and upload ciphertext.',
      'faq.q2': 'Does it need public internet access?',
      'faq.a2': 'In managed mode the client only talks to the customer’s own gateway, which reaches upstream models. Standalone mode talks to an OpenAI-compatible endpoint directly and keeps the provider key in the OS credential store. Network policy is deny-first; vendor and telemetry domains are blocked.',
      'faq.q3': 'Which platforms are supported?',
      'faq.a3': 'macOS, Linux and Windows 10/11, with Node.js 22+. The UI switches between Chinese and English. On Windows, 0600 is not an ACL — keep the data directory in a per-user profile and enable disk encryption.',
      'faq.q4': 'What about the desktop shell and offline installers?',
      'faq.a4': 'The Tauri shell is signed and distributed per platform; signing and notarisation depend on the customer’s certificate environment. Source stays private — only this site and the release artifacts are public.',
      'foot.tag': 'Private deployment · source private · artifacts public',
      'foot.download': 'Download', 'foot.downloads': 'Artifacts', 'foot.github': 'GitHub org',
      'foot.ver': 'Protocol 1.2.0 · client 0.3.1'
    }
  };

  var SHOTS = [
    { src: 'assets/shots/local-chat.png', url: 'http://127.0.0.1:8788' },
    { src: 'assets/shots/local-skills.png', url: 'http://127.0.0.1:8788' },
    { src: 'assets/shots/console-overview.png', url: 'https://console.internal/overview' },
    { src: 'assets/shots/console-harness.png', url: 'https://console.internal/harness' },
    { src: 'assets/shots/console-marketplace.png', url: 'https://console.internal/marketplace' }
  ];

  var lang = 'zh';
  var shotIndex = 0;
  var docEl = document.documentElement;

  function t(key) {
    var pack = I18N[lang] || I18N.zh;
    return Object.prototype.hasOwnProperty.call(pack, key) ? pack[key] : (I18N.zh[key] || key);
  }

  function store(value) {
    try { localStorage.setItem('hb-site-lang', value); } catch (e) { /* storage may be unavailable */ }
  }

  function readStored() {
    try { return localStorage.getItem('hb-site-lang'); } catch (e) { return null; }
  }

  function applyText() {
    var nodes = document.querySelectorAll('[data-i18n]');
    for (var i = 0; i < nodes.length; i += 1) nodes[i].textContent = t(nodes[i].getAttribute('data-i18n'));

    var html = document.querySelectorAll('[data-i18n-html]');
    for (var j = 0; j < html.length; j += 1) html[j].innerHTML = t(html[j].getAttribute('data-i18n-html'));

    var attrs = document.querySelectorAll('[data-i18n-attr]');
    for (var k = 0; k < attrs.length; k += 1) {
      var parts = attrs[k].getAttribute('data-i18n-attr').split(':');
      if (parts.length === 2) attrs[k].setAttribute(parts[0], t(parts[1]));
    }

    document.title = t('meta.title');
    var desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute('content', t('meta.desc'));

    renderShot(shotIndex, false);
  }

  function renderShot(index, swap) {
    shotIndex = index;
    var meta = SHOTS[index];
    var img = document.getElementById('shotImg');
    var url = document.getElementById('shotUrl');
    var capTitle = document.getElementById('shotCapTitle');
    var capBody = document.getElementById('shotCapBody');
    var tabs = document.querySelectorAll('.shot-tabs button');
    var stage = document.getElementById('shotStage');

    for (var i = 0; i < tabs.length; i += 1) {
      tabs[i].setAttribute('aria-selected', i === index ? 'true' : 'false');
      if (stage) tabs[i].setAttribute('aria-controls', 'shotStage');
    }
    if (stage && tabs[index]) stage.setAttribute('aria-labelledby', tabs[index].id);
    if (url) url.textContent = meta.url;
    if (capTitle) capTitle.textContent = t('ui.cap' + (index + 1) + '.title');
    if (capBody) capBody.textContent = t('ui.cap' + (index + 1) + '.body');
    if (img) {
      img.alt = t('ui.alt' + (index + 1));
      if (!swap) {
        if (img.getAttribute('src') === meta.src) img.classList.add('on');
        else preload(meta.src, img);
      } else {
        preload(meta.src, img);
      }
    }
  }

  function preload(src, img) {
    img.classList.remove('on');
    var next = new Image();
    next.onload = function () {
      if (img.getAttribute('src') !== src) {
        img.setAttribute('src', src);
        if (img.complete) img.classList.add('on');
        else img.addEventListener('load', function () { img.classList.add('on'); }, { once: true });
      } else {
        img.classList.add('on');
      }
    };
    next.onerror = function () { img.setAttribute('src', src); img.classList.add('on'); };
    next.src = src;
  }

  function setLang(next, persist) {
    lang = next === 'en' ? 'en' : 'zh';
    docEl.setAttribute('lang', lang === 'zh' ? 'zh-CN' : 'en');
    docEl.setAttribute('data-lang', lang);
    var buttons = document.querySelectorAll('[data-set-lang]');
    for (var i = 0; i < buttons.length; i += 1) {
      var on = buttons[i].getAttribute('data-set-lang') === lang;
      buttons[i].classList.toggle('on', on);
      buttons[i].setAttribute('aria-pressed', on ? 'true' : 'false');
    }
    applyText();
    if (persist) {
      store(lang);
      try {
        var nextUrl = window.location.pathname + '?lang=' + lang + window.location.hash;
        window.history.replaceState(null, '', nextUrl);
      } catch (e) { /* history may be unavailable */ }
    }
  }

  function initReveal() {
    var items = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window)) {
      for (var i = 0; i < items.length; i += 1) items[i].classList.add('in');
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    for (var j = 0; j < items.length; j += 1) io.observe(items[j]);
  }

  function initCopy() {
    var buttons = document.querySelectorAll('.copy');
    for (var i = 0; i < buttons.length; i += 1) {
      buttons[i].addEventListener('click', function () {
        var target = document.getElementById(this.getAttribute('data-copy'));
        if (!target) return;
        var text = target.textContent.trim();
        var self = this;
        var done = function () {
          self.classList.add('done');
          var label = self.querySelector('[data-i18n]') || self;
          label.textContent = t('dl.copied');
          setTimeout(function () {
            self.classList.remove('done');
            label.textContent = t('dl.copy');
          }, 1600);
        };
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(text).then(done, done);
        } else {
          var area = document.createElement('textarea');
          area.value = text;
          area.setAttribute('readonly', '');
          area.style.position = 'fixed';
          area.style.opacity = '0';
          document.body.appendChild(area);
          area.select();
          try { document.execCommand('copy'); } catch (e) { /* ignore */ }
          document.body.removeChild(area);
          done();
        }
      });
    }
  }

  function initTabs() {
    var tabs = document.querySelectorAll('.shot-tabs button');
    for (var i = 0; i < tabs.length; i += 1) {
      tabs[i].id = 'shotTab' + i;
      tabs[i].addEventListener('click', function () {
        renderShot(Number(this.getAttribute('data-shot')), true);
      });
      tabs[i].addEventListener('keydown', function (event) {
        var current = Number(this.getAttribute('data-shot'));
        var next = current;
        if (event.key === 'ArrowDown' || event.key === 'ArrowRight') next = (current + 1) % tabs.length;
        else if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') next = (current - 1 + tabs.length) % tabs.length;
        else return;
        event.preventDefault();
        tabs[next].focus();
        renderShot(next, true);
      });
    }
  }

  var stored = readStored();
  var queryLang = null;
  try { queryLang = new URLSearchParams(window.location.search).get('lang'); } catch (e) { /* older browsers */ }
  var initial = queryLang === 'en' || queryLang === 'zh'
    ? queryLang
    : (stored === 'en' || stored === 'zh'
      ? stored
      : ((navigator.language || '').toLowerCase().indexOf('zh') === 0 ? 'zh' : 'en'));

  docEl.setAttribute('data-lang', initial);
  var langButtons = document.querySelectorAll('[data-set-lang]');
  for (var b = 0; b < langButtons.length; b += 1) {
    langButtons[b].addEventListener('click', function () {
      setLang(this.getAttribute('data-set-lang'), true);
    });
  }

  setLang(initial, false);
  initReveal();
  initCopy();
  initTabs();

  var year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());
})();
