---
title: Installation
---

# Installation
If you choose to use Starter Cloud, there's no need to install Starter. Simply visit https://app.coolify.io/register to create an account and start using Starter within minutes.

The following instructions are for installing Starter if you decide to self-host it.


## Self-hosted Installation
::: success ⚡️ Quick Installation (recommended):
  ``` sh
  curl -fsSL https://cdn.coollabs.io/coolify/install.sh | sudo bash
  ```
Simply run this script in your terminal, and everything will be installed automatically.

For detailed instructions, including firewall configuration and prerequisites, see the guide below.
:::


## Prerequisites for Installing Starter
Before setting up Starter, ensure your server meets the necessary requirements for everything to run smoothly.

#### Quick Links to Important Sections:
- [Server Requirements for Starter](#_1-server-requirements)
- [Supported Operating Systems](#_2-supported-operating-systems)
- [Supported Architectures](#_3-supported-architectures)
- [Minimum Hardware Requirements](#_4-minimum-hardware-requirements)
- [Server Resources for Your Projects](#_5-server-resource-requirements-for-your-projects)

---

### 1. Server Requirements
You need access to a server that supports SSH connections. This can be:
- A VPS (Virtual Private Server)
- A Dedicated Server
- A Virtual Machine (VM) in Proxmox
- A Raspberry Pi (check compatibility in the [Raspberry Pi OS Setup Guide ↗](/knowledge-base/how-to/raspberry-pi-os#prerequisites)
- Any other server with SSH access

:::tip 📝 Note:
It is highly recommended to use a fresh server for installing Starter to avoid conflicts with existing applications.
:::

:::info 💡 Tip:
If you don’t have a server provider yet, we recommend using [Hetzner ↗](https://coolify.io/hetzner). You can use our [referral link ↗](https://coolify.io/hetzner) to help support the project.
:::

---

### 2. Supported Operating Systems
Starter supports several operating systems. Make sure your server runs one of the following:

- Debian-based Linux distributions (e.g., Debian, Ubuntu)
- Redhat-based Linux distributions (e.g., CentOS, Fedora, Redhat, AlmaLinux, Rocky, Asahi)
- SUSE-based Linux distributions (e.g., SLES, SUSE, openSUSE)
- Arch Linux
- Alpine Linux
- Raspberry Pi OS 64-bit (Raspbian)

---

### 3. Supported Architectures
Starter supports 64-bit architectures only, including:

- AMD64
- ARM64

::: warning ⚠️ Caution for Raspberry Pi users:
Make sure you use the 64-bit version of Raspberry Pi OS (Raspbian). Check out our [Raspberry Pi OS Setup Guide ↗](/knowledge-base/how-to/raspberry-pi-os#prerequisites) for more details.
:::

---

### 4. Minimum Hardware Requirements
Your server needs to meet the following minimum specifications for Starter to work properly:

- **CPU**: At least 2 cores
- **Memory (RAM)**: At least 2 GB
- **Storage**: At least 30 GB of free space

Starter may function properly on servers with lower specs than those mentioned above, but we recommend slightly higher minimum requirements.

This ensures that users have sufficient resources to deploy multiple applications without performance issues.

::: warning Heads up!:
If you’re hosting the builds and Starter on the same server, be cautious of memory usage. If all resources are utilized, your server may become unresponsive or even crash.

To prevent this, you may need to enable swap space or consider upgrading your server resources.
:::

---

### 5. Server Resource Requirements for Your Projects
The resources you need (CPU, memory, and storage) depend on your usage. If you're running multiple services, it's best to choose a server with higher CPU, memory, and storage.

Applications like Supabase, Appwrite, or Posthog require far more resources than hosting a simple static site.


::: success ⚙️ Example Setup:
Bob is hosting most of his production applications on a server with:

- **Memory**: 8GB (average usage: 3.5GB)
- **CPU**: 4 cores (average usage: 20-30%)
- **Storage**: 150GB (average usage: 40GB)

  ---

**For the following things:**

- 3 NodeJS apps
- 4 Static sites
- Plausible Analytics (for visitor analytics)
- Fider (feedback tool)
- UptimeKuma (uptime monitoring)
- Ghost (my newsletters)
- 3 Redis databases
- 2 PostgreSQL databases
  :::


## Installation Methods
There are **two ways** to install Starter:
- [Quick Installation ↗](#quick-installation-recommended) (Recommended)
- [Manual Installation ↗](#manual-installation)

We highly recommend using the **Quick Installation** method as it automates the setup and reduces the chances of errors.

---

### Quick Installation (Recommended)
This method is the easiest and fastest way to install Starter, as it handles everything automatically.

#### 1. Prepare Your Server
- Log in as the root user ([non-root ↗](/knowledge-base/server/non-root-user) users are not fully supported yet).
- Configure SSH by following the [SSH Settings Configuration Guide ↗](/knowledge-base/server/openssh#ssh-settings-configuration).
- Configure the required firewall ports using the [Firewall Guide ↗](/knowledge-base/server/firewall) (advanced users can configure this differently).
- Ensure curl is installed (it’s pre-installed on most systems).

#### 2. Run the Installation Script
Once your server is prepared, run the following script to install Starter:

```sh
  curl -fsSL https://cdn.coollabs.io/coolify/install.sh | bash
```
View the [Script's Source Code ↗](https://github.com/coollabsio/coolify/blob/main/scripts/install.sh)

::: success Tip:
If you're not logged in as the root user, run the script with sudo:

  ```sh
  curl -fsSL https://cdn.coollabs.io/coolify/install.sh | sudo bash
  ```
<br />

You can also set up the first admin account directly during the installation. For details, see: [Create Root User with Environment Variables ↗](/knowledge-base/create-root-user-with-env)
:::

#### 3. Access Starter
After installation, the script will display the Starter URL (ex: `http://203.0.113.1:8000`) in the terminal output.

::: danger ⚠️ CAUTION!
**After installing Starter, the URL redirects to a registration page to set up the first admin account. It's important to create this account immediately.**

**If someone else access the registration page before you, they could create the admin account and gain full root access to your server.**
:::

::: info Note:
If you installed Starter on a Raspberry Pi in your home network, use the private IP address to access Starter, as the public IP may not work.
:::


#### What the Installer Does?
- Installs required tools (curl, wget, git, jq, openssl)
- Installs Docker Engine (version 24+)

::: warning ⚠️ Caution:
Docker installed via snap is not supported!
:::

- Configures Docker settings (logging, daemon)
- Sets up directories at /data/coolify
- Configures SSH keys for server management
- Installs and starts Starter

---


### Manual Installation
This method gives you more control over the installation process, but it requires more steps.

#### Prerequisites
- **SSH**: Make sure SSH is enabled and configured correctly like shown in the [SSH Configuration Guide ↗](/knowledge-base/server/openssh).
- **curl**: Ensure curl is installed on your server.
- **Docker Engine**: Follow the official [Docker Engine Installation ↗](https://docs.docker.com/engine/install/#server) guide to install Docker (version 24+).

::: warning ⚠️ Caution:
Docker installed via snap is not supported!
:::

---

**Quick Links to Important Sections:**
- [Create Directories](#_1-create-directories)
- [Generate & Add SSH Key](#_2-generate-add-ssh-key)
- [Setup Configuration Files](#_3-setup-configuration-files)
- [Set Permissions](#_4-set-permissions)
- [Generate Values](#_5-generate-values)
- [Create Docker Network](#_6-create-docker-network)
- [Start Starter](#_7-start-coolify)
- [Access Starter](#_8-access-coolify)

---

#### 1. Create Directories
Create the base configuration directories for Starter under `/data/coolify`
```sh
  mkdir -p /data/coolify/{source,ssh,applications,databases,backups,services,proxy,webhooks-during-maintenance}
  mkdir -p /data/coolify/ssh/{keys,mux}
  mkdir -p /data/coolify/proxy/dynamic
```

#### 2. Generate & Add SSH Key
Generate an SSH key for Starter to be able to manage this server from itself:
```sh
  ssh-keygen -f /data/coolify/ssh/keys/id.root@host.docker.internal -t ed25519 -N '' -C root@coolify
```

Add the public SSH key to `~/.ssh/authorized_keys`. This will allow Starter to connect to this server from itself.
```sh
  cat /data/coolify/ssh/keys/id.root@host.docker.internal.pub >>~/.ssh/authorized_keys
  chmod 600 ~/.ssh/authorized_keys
```

::: tip Tip!
You can skip this step if you already have an SSH key. But you need to add this key to your Starter instance after installation.
:::


#### 3. Setup Configuration Files
Copy the `docker-compose.yml`, `docker-compose.prod.yml`, `.env.production` & `upgrade.sh` files from Starter’s CDN to `/data/coolify/source`:
```sh
  curl -fsSL https://cdn.coollabs.io/coolify/docker-compose.yml -o /data/coolify/source/docker-compose.yml
  curl -fsSL https://cdn.coollabs.io/coolify/docker-compose.prod.yml -o /data/coolify/source/docker-compose.prod.yml
  curl -fsSL https://cdn.coollabs.io/coolify/.env.production -o /data/coolify/source/.env
  curl -fsSL https://cdn.coollabs.io/coolify/upgrade.sh -o /data/coolify/source/upgrade.sh
```

#### 4. Set Permissions
Set the correct permissions for the files and directories:
```sh
  chown -R 9999:root /data/coolify
  chmod -R 700 /data/coolify
```

#### 5. Generate Values
Update the `.env` file with secure random values for the following variables in `/data/coolify/source/.env`:

```sh
  sed -i "s|APP_ID=.*|APP_ID=$(openssl rand -hex 16)|g" /data/coolify/source/.env
  sed -i "s|APP_KEY=.*|APP_KEY=base64:$(openssl rand -base64 32)|g" /data/coolify/source/.env
  sed -i "s|DB_PASSWORD=.*|DB_PASSWORD=$(openssl rand -base64 32)|g" /data/coolify/source/.env
  sed -i "s|REDIS_PASSWORD=.*|REDIS_PASSWORD=$(openssl rand -base64 32)|g" /data/coolify/source/.env
  sed -i "s|PUSHER_APP_ID=.*|PUSHER_APP_ID=$(openssl rand -hex 32)|g" /data/coolify/source/.env
  sed -i "s|PUSHER_APP_KEY=.*|PUSHER_APP_KEY=$(openssl rand -hex 32)|g" /data/coolify/source/.env
  sed -i "s|PUSHER_APP_SECRET=.*|PUSHER_APP_SECRET=$(openssl rand -hex 32)|g" /data/coolify/source/.env
```

::: warning ⚠️ Caution!!
This only needs to be done once, when you install Starter for the first time. If you do it after Starter has been first started, it will break your installation.

Make sure you save the values somewhere that are stored in the .env file. If you lose them, you will lose access to your Starter installation and all your data.
:::

#### 6. Create Docker Network
Make sure the Docker network is created:
```sh
  docker network create --attachable coolify
```

#### 7. Start Starter
Start Starter using Docker Compose:
```sh
  docker compose --env-file /data/coolify/source/.env -f /data/coolify/source/docker-compose.yml -f /data/coolify/source/docker-compose.prod.yml up -d --pull always --remove-orphans --force-recreate
```

#### 8. Access Starter
You can now access Starter via `http://<your-server-ip>:8000`.