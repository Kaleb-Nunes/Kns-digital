import os
import subprocess
import datetime
import webbrowser

# --- CONFIGURAÇÃO ---
REPO_URL = "https://github.com/Kaleb-Nunes/Kns-digital"
TIMESTAMP = datetime.datetime.now().strftime("%Y%m%d-%H%M")
BRANCH_NAME = f"feature/docs-v{TIMESTAMP}"

# --- CONTEÚDO DO README (COMPLETO) ---
README_CONTENT = r"""# KNS CONSULTORIA GLOBAL // SOVEREIGN ENGINEERING

> **"Infraestrutura crítica e engenharia de rede para empresas que não podem parar."**

![Status](https://img.shields.io/badge/Status-Production%20Ready-00ff88?style=for-the-badge&logo=github)
![Tech](https://img.shields.io/badge/Stack-Tailwind%20%7C%20Alpine-00e5ff?style=for-the-badge&logo=tailwindcss)
![Security](https://img.shields.io/badge/IPv6-Ready-white?style=for-the-badge&logo=cloudflare)
---
## 🎯 Visão Executiva

Este repositório hospeda a interface digital oficial da **KNS Consultoria Global**. A plataforma serve como demonstração de força técnica, apresentando nossas soluções de **Monitoramento de Missão Crítica (NOC/SOC)** e o exclusivo **Protocolo 09**.

O projeto foi desenhado sob a filosofia **"Zero-Bloat"**: sem frameworks pesados, sem dependências desnecessárias, apenas performance pura e código limpo.

---

## 🧠 Arquitetura: Protocolo 09 (Workflow)

Abaixo, o fluxo lógico da nossa metodologia de **Engenharia de Continuidade**, renderizado em tempo real:

```mermaid
graph TD
    A[📡 Monitoramento 24/7] -->|Zabbix/Grafana| B{Detecção de Anomalia}
    B -->|Baixa Latência| C[Log & Auto-Healing]
    B -->|Parada Crítica| D[🚨 Alerta NOC KNS]
    
    subgraph "Sovereign Response"
    D --> E[Análise de Causa Raiz]
    E --> F[Mitigação BGP/Firewall]
    F --> G[Restabelecimento do Serviço]
    end
    
    G --> H[Relatório de Incidente]
    C --> A
    H --> A
    
    style D fill:#ff0000,stroke:#333,stroke-width:2px,color:#fff
    style G fill:#00ff88,stroke:#333,stroke-width:2px,color:#000
    style A fill:#0a0a0a,stroke:#00e5ff,stroke-width:2px,color:#fff
    ⚡ Stack Tecnológica (V55)
Core: HTML5 Semântico + Tailwind CSS (JIT Engine).

Interatividade: Alpine.js (Micro-framework para reatividade sem Virtual DOM).

Assets: Estrutura de pastas public/ em conformidade com Edge Networks (Vercel/AWS).

Performance:

Uso de CSS Keyframes para animações aceleradas por GPU.

Native Lazy Loading.

Otimização de cabeçalhos Cache-Control.

📂 Estrutura de Engenharia
A organização reflete a clareza necessária para operações de alta disponibilidade:

Plaintext
Kns-digital/
├── index.html          # Single Point of Entry
├── public/             # Static Assets (Imagens/Certificados)
│   ├── founder-photo.jpg
│   ├── sage-cert.png
│   └── ...
├── src/                # Source Logic (Development only)
└── README.md           # Documentation
📞 Contato & Governança
Kaleb Nunes dos Santos Founder & Head of Engineering

"A estabilidade não é um acidente. É engenharia."

WhatsApp: +55 47 98890-1616

LinkedIn: linkedin.com/in/kalebnunes

© 2026 KNS CONSULTORIA GLOBAL. Todos os direitos reservados. """

def run_command(command): """Executa comandos do sistema e exibe saída""" try: print(f"🔄 Exec: {command}") subprocess.run(command, check=True, shell=True) except subprocess.CalledProcessError as e: print(f"⚠️ Erro não fatal ou aviso no comando: {command}")

def main(): print(f"\n🚀 INICIANDO DEPLOY AUTOMATIZADO KNS v{TIMESTAMP}\n")

# 1. ESCREVER README
print("📝 Reescrevendo README.md...")
try:
    with open("README.md", "w", encoding="utf-8") as f:
        f.write(README_CONTENT)
    print("✅ README salvo com sucesso.")
except Exception as e:
    print(f"❌ ERRO CRÍTICO ao salvar arquivo: {e}")
    return

# 2. GIT FLOW
print("\n🔧 Configurando Git...")
run_command("git config --global --add safe.directory '*'")

# Tenta voltar para main e atualizar
run_command("git checkout main")
run_command("git pull origin main")

print(f"\n🌿 Criando Branch: {BRANCH_NAME}")
# Cria branch (-b) ou muda para ela se existir
try:
    subprocess.run(f"git checkout -b {BRANCH_NAME}", check=True, shell=True)
except:
    subprocess.run(f"git checkout {BRANCH_NAME}", shell=True)

print("\n📦 Commitando alterações...")
run_command("git add .")

# Commit (ignora erro se não houver mudanças)
subprocess.run('git commit -m "Docs: Update README with Mermaid Architecture"', shell=True)

print("\n☁️ Enviando para o GitHub...")
run_command(f"git push origin {BRANCH_NAME}")

# 3. ABRIR PR
pr_url = f"{REPO_URL}/compare/main...{BRANCH_NAME}?expand=1"
print(f"\n🔗 Abrindo PR: {pr_url}")
webbrowser.open(pr_url)

print("\n==========================================")
print("✅ PROCESSO FINALIZADO.")
print("==========================================\n")
if name == "main": main()