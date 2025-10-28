# Playwright automation: lesson 01
## I/NVM
- NVM = Node Version Manager: is a tool for managing NodeJs versions on your device.

- NodeJs is a runtime environment that allows the execution of JavaScript code.

*Note:*

>*NVM (Node Version Manager) is a tool that allows you to download and install Node.js. Check if you have it installed via `nvm --version`.*

>*NPM (Node Package Manager) is a tool that allows you to install javascript packages. Check if you have it installed via `npm --version`.*
    
>*NPM comes with Node.js so if you have node installed (`node --version`) you most likely have npm installed as well.*

>*You don't need NVM unless you want to keep multiple versions of Node.js installed on your system or if you'd like to upgrade your version.*


## II/ Git configuration
### Default configuration
- Config default username: `git config --global user.name "<user_name>"`
- Config default email: `git config --global email "<user_email>"`
- Config default branch as main: `git config --global init.defaultBranch main`
- Check config: `git config --list`

## III/ Setup SSH keys on Github
### 1. Generate an SSH Key Pair
Run the following command to generate a new SSH key: `ssh-keygen -t rsa -b 4096 -C "your_email@example.com"`

### 2. Adding new SSH key to your Github account
- Run the following command to get the ssh key: `cat ~/.ssh/id_rsa.pub`
- Access https://github.com/settings/ssh/new to add ssh key to your GitHub account

## IV/ Installing Playwright
The command below either initializes a new project or adds Playwright to an existing one: `npm init playwright@latest`

## V/ Push code to GitHub
- Initialize local repository: `git init`
- Link local repository and GitHub repository: `git remote add origin <ssh_link>
- Add changes to staging: `git add .`
- Commit changes: `git commit -m"<message>"`
- Push changes to to origin (GitHub): `git push origin main`