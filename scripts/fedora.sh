sudo dnf install git -y
sudo dnf install nodejs -y

sudo rpm --import https://packages.microsoft.com/keys/microsoft.asc
sudo sh -c 'echo -e "[code]\nname=Visual Studio Code\nbaseurl=https://packages.microsoft.com/yumrepos/vscode\nenabled=1\ngpgcheck=1\ngpgkey=https://packages.microsoft.com/keys/microsoft.asc" > /etc/yum.repos.d/vscode.repo'
dnf check-update
sudo dnf install code -y

sudo dnf install dnf-plugins-core -y
sudo rpm --import https://dl.google.com/linux/linux_signing_key.pub
wget https://dl.google.com/linux/direct/google-chrome-stable_current_x86_64.rpm
sudo dnf install google-chrome-stable_current_x86_64.rpm -y

curl cloud.izacpeterson.com/fedora/izac.zip --output izac.zip

sudo dnf install unzip

sudo unzip izac.zip -d /home/izac