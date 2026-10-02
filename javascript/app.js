const screens = { landing: document.querySelector('#landingScreen'), register: document.querySelector('#registerScreen'), login: document.querySelector('#loginScreen'), app: document.querySelector('#appScreen') };
const ADMIN_EMAIL = 'adm@gmail.com';
const ADMIN_PASSWORD = 'adm 2026';
const DEMO_STUDENTS = [
	{ name: 'Ana Souza', email: 'ana.souza47@gmail.com', phone: '(31) 98264-7135', belt: 'Iniciação', classType: 'Infantil', role: 'student', demo: true },
	{ name: 'Bruno Lima', email: 'bruno.lima82@gmail.com', phone: '(31) 99731-4068', belt: 'Iniciação', classType: 'Infantil', role: 'student', demo: true },
	{ name: 'Clara Alves', email: 'clara.alves36@gmail.com', phone: '(31) 99158-2746', belt: 'Cordão verde', classType: 'Infantil', role: 'student', demo: true },
	{ name: 'Diego Santos', email: 'diego.santos64@gmail.com', phone: '(31) 98642-5309', belt: 'Cordão verde', classType: 'Infantil', role: 'student', demo: true },
	{ name: 'Eduarda Costa', email: 'eduarda.costa91@gmail.com', phone: '(31) 99817-6254', belt: 'Verde e amarelo', classType: 'Infantil', role: 'student', demo: true },
	{ name: 'Felipe Rocha', email: 'felipe.rocha58@gmail.com', phone: '(31) 98473-2196', belt: 'Azul', classType: 'Adulto', role: 'student', demo: true },
	{ name: 'Gabriela Martins', email: 'gabriela.martins73@gmail.com', phone: '(31) 99246-5817', belt: 'Azul', classType: 'Adulto', role: 'student', demo: true },
	{ name: 'Henrique Souza', email: 'henrique.souza29@gmail.com', phone: '(31) 98735-6402', belt: 'Azul', classType: 'Adulto', role: 'student', demo: true },
	{ name: 'Isabela Reis', email: 'isabela.reis85@gmail.com', phone: '(31) 99562-3184', belt: 'Verde e amarelo', classType: 'Adulto', role: 'student', demo: true },
	{ name: 'Joao Oliveira', email: 'joao.oliveira41@gmail.com', phone: '(31) 98319-7526', belt: 'Azul', classType: 'Adulto', role: 'student', demo: true }
];
let currentUser = null;
document.querySelector('.user-badge').textContent = 'KM';
document.querySelector('.academy b').textContent = 'DojoPulse';
document.querySelectorAll('.activity-card').forEach((card, index) => {
	const visibleStudents = [4, 3, 3][index];
	const studentItems = card.querySelectorAll('.student-list li');
	const participantCount = card.querySelector('.activity-card div b');
	if (participantCount) participantCount.textContent = visibleStudents;
	studentItems.forEach((student, studentIndex) => {
		student.hidden = studentIndex >= visibleStudents;
		if (studentIndex < DEMO_STUDENTS.length) {
			student.querySelector('b').textContent = DEMO_STUDENTS[studentIndex].name;
			student.querySelector('small').textContent = `${DEMO_STUDENTS[studentIndex].email} · ${DEMO_STUDENTS[studentIndex].phone}`;
		}
	});
});
function showScreen(name) { Object.values(screens).forEach(screen => screen.classList.add('hidden')); screens[name].classList.remove('hidden'); window.scrollTo({ top: 0, behavior: 'smooth' }); }
document.querySelectorAll('[data-screen]').forEach(button => button.addEventListener('click', () => showScreen(button.dataset.screen)));
function getAccounts() { return JSON.parse(localStorage.getItem('dojoPulseAccounts') || '[]'); }
function saveAccounts(accounts) { localStorage.setItem('dojoPulseAccounts', JSON.stringify(accounts)); }
const registerForm = document.querySelector('#registerForm');
registerForm.addEventListener('submit', event => { event.preventDefault(); const data = new FormData(registerForm); const error = document.querySelector('#registerError'); if (data.get('password') !== data.get('confirmPassword')) { error.textContent = 'As senhas precisam ser iguais.'; return; } if (data.get('email').toLowerCase() === ADMIN_EMAIL) { error.textContent = 'Este e-mail é reservado para a administração.'; return; } const accounts = getAccounts(); if (accounts.some(account => account.email === data.get('email'))) { error.textContent = 'Este e-mail já está cadastrado.'; return; } accounts.push({ name: data.get('name'), email: data.get('email'), phone: data.get('phone'), belt: data.get('belt'), password: data.get('password'), role: 'student', createdAt: new Date().toLocaleDateString('pt-BR') }); saveAccounts(accounts); currentUser = accounts[accounts.length - 1]; showScreen('app'); prepareUserAccess(); });
const loginForm = document.querySelector('#loginForm');
loginForm.addEventListener('submit', event => { event.preventDefault(); const data = new FormData(loginForm); const error = document.querySelector('#loginError'); if (data.get('email') === ADMIN_EMAIL && data.get('password') === ADMIN_PASSWORD) { currentUser = { name: 'Administrador', email: ADMIN_EMAIL, role: 'admin' }; showScreen('app'); prepareUserAccess(); return; } const account = getAccounts().find(item => item.email === data.get('email') && item.password === data.get('password')); if (!account) { error.textContent = 'E-mail ou senha inválidos.'; return; } currentUser = account; showScreen('app'); prepareUserAccess(); });
document.querySelector('#forgotPassword').addEventListener('click', () => { document.querySelector('#loginError').textContent = 'Digite seu e-mail para solicitar a recuperação.'; });
const panels = { classes: document.querySelector('#classesPanel'), levels: document.querySelector('#levelsPanel'), notices: document.querySelector('#noticesPanel') };
const beltField = document.createElement('label');
beltField.innerHTML = 'Faixa<select name="belt" required><option value="">Selecione sua faixa</option><option>Iniciação</option><option>Cordão verde</option><option>Verde e amarelo</option><option>Azul</option></select>';
registerForm.querySelector('input[name="password"]').closest('label').before(beltField);
const navigation = document.querySelector('.app-sidebar nav');
const adminButton = document.createElement('button'); adminButton.className = 'admin-only'; adminButton.dataset.panel = 'admin'; adminButton.innerHTML = '▣ <span>Administração</span>'; navigation.appendChild(adminButton);
const adminPanel = document.createElement('section'); adminPanel.className = 'panel-view'; adminPanel.id = 'adminPanel'; adminPanel.innerHTML = '<p class="eyebrow"><i></i> CONTROLE RESTRITO</p><h1>Administração</h1><p class="app-subtitle">Cadastros e contatos disponíveis somente para administradores. Os registros marcados como demonstração não representam pessoas reais.</p><div class="admin-summary"><b id="accountCount">0</b><span>pessoas cadastradas</span></div><div class="admin-table-wrap"><table class="admin-table"><thead><tr><th>Nome</th><th>E-mail</th><th>Acesso</th><th>Telefone</th><th>Faixa</th></tr></thead><tbody id="accountTable"></tbody></table></div>';
document.querySelector('.app-body').appendChild(adminPanel); panels.admin = adminPanel;
const settingsButton = document.querySelector('.settings');
settingsButton.dataset.panel = 'settings';
const settingsPanel = document.createElement('section'); settingsPanel.className = 'panel-view'; settingsPanel.id = 'settingsPanel'; settingsPanel.innerHTML = '<p class="eyebrow"><i></i> CONTATO</p><h1>Configurações</h1><p class="app-subtitle">Entre em contato com a equipe da academia.</p><div class="settings-card"><span>E-mail</span><a href="mailto:ct.itamartopfamilyy@gmai.com">ct.itamartopfamilyy@gmai.com</a><span>Telefone</span><a href="tel:+5531920056348">(31) 92005-6348</a></div><button class="neon-button" id="logoutButton" type="button">Sair <span>→</span></button></section>';
document.querySelector('.app-body').appendChild(settingsPanel); panels.settings = settingsPanel;
function prepareUserAccess() { adminButton.classList.toggle('visible', currentUser.role === 'admin'); if (currentUser.role === 'admin') { showPanel('admin'); renderAccounts(); } else { showPanel('classes'); } }
function showPanel(name) { Object.values(panels).forEach(panel => panel.classList.remove('active')); panels[name].classList.add('active'); document.querySelectorAll('[data-panel]').forEach(button => button.classList.toggle('active', button.dataset.panel === name)); document.querySelector('#panelTitle').textContent = name === 'classes' ? 'Turmas' : name === 'levels' ? 'Graduações' : name === 'notices' ? 'Avisos' : name === 'feedback' ? 'Feedback' : name === 'settings' ? 'Configurações' : 'Administração'; }
document.querySelectorAll('[data-panel]').forEach(button => button.addEventListener('click', () => showPanel(button.dataset.panel)));
adminButton.addEventListener('click', () => { renderAccounts(); showPanel('admin'); });
document.querySelector('#logoutButton').addEventListener('click', () => { currentUser = null; adminButton.classList.remove('visible'); showScreen('landing'); });
function renderAccounts() { const accounts = [...DEMO_STUDENTS, ...getAccounts()]; document.querySelector('#accountCount').textContent = accounts.length; document.querySelector('#accountTable').innerHTML = accounts.length ? accounts.map(account => `<tr><td>${account.name}</td><td>${account.email}</td><td>${account.role === 'admin' ? 'Administrador' : 'Aluno'}</td><td>${account.phone}</td><td>${account.belt || 'Não informada'}</td></tr>`).join('') : '<tr><td colspan="5">Nenhum cadastro realizado ainda.</td></tr>'; }
