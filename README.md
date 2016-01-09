## About the project
The skeleton of this project was taken from the official samples (https://github.com/aspnet/Home/tree/dev/samples/1.0.0-rc1-update1).



## Set up your machine (ubuntu)

Install DNVM:
```
sudo apt-get install unzip curl
curl -sSL https://raw.githubusercontent.com/aspnet/Home/dev/dnvminstall.sh | DNX_BRANCH=dev sh && source ~/.dnx/dnvm/dnvm.sh
source ~/.dnx/dnvm/dnvm.sh
```

Install .NET Core:
```
sudo apt-get install libunwind8 gettext libssl-dev libcurl4-openssl-dev zlib1g libicu-dev uuid-dev
dnvm install 1.0.0-rc1-update1 -r coreclr -OS linux -a x64 -p
```

Install libuv:
```
sudo apt-get install make automake libtool curl
curl -sSL https://github.com/libuv/libuv/archive/v1.4.2.tar.gz | sudo tar zxfv - -C /usr/local/src
cd /usr/local/src/libuv-1.4.2
sudo sh autogen.sh
sudo ./configure
sudo make
sudo make install
sudo rm -rf /usr/local/src/libuv-1.4.2 && cd ~/
sudo ldconfig
```

Install Kestrel:
```
dnu install kestrel
```

Install Visual Studio Code:
* Download it from here: https://code.visualstudio.com/
* Decompress
* Run it: `./Code`


## Build
Get dependencies: `dnu restore`

Build `dnu build --framework dnxcore50`

Run `dnx web`

Go to your browser: http://localhost:5000
