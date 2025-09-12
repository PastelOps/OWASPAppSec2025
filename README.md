# PastelOps - Frida Templates and Scripts

This repository contains a collection of Frida templates and scripts presented at [OWASP AppSec Singapore 2025 - iOS Reversing on a Budget: Frida, Ghidra, and a Jailbroken Device](https://singapore.appsecdays.org/).  
These resources have been helpful in our dynamic analysis and reverse engineering of iOS mobile applications.  

By sharing them, our goal is to make the process of reversing and analyzing iOS applications more approachable and efficient for security researchers, testers, and learners alike.  

## What's Inside

- **Templates** – Starter code for common hooking scenarios.  
- **Scripts** – Practical examples used during assessments.  

Tested on **Frida v16.5.2**

## Reminder

A significant update was introduced to the Frida API starting from version 17. Please refer to the official release notes for details on the changes to API calls and syntax.

[Frida-17-0-0-released](https://frida.re/news/2025/05/17/frida-17-0-0-released/)

## Purpose

This repository is intended as a learning and research resource. Feel free to adapt, extend, and use these scripts in your own work.  

## Usage

Make sure you have Frida installed on your machine and the Frida server running on your iOS device.\
*Ensure that both uses the same version.

### Install Frida (Computer)

```bash
pip install frida==16.5.2
```

### Install Frida (iOS Device)

Download "frida_16.5.2_iphoneos-arm64.deb" from [Frida-Releases-16.5.2](https://github.com/frida/frida/releases/tag/16.5.2).\
Copy "frida_16.5.2_iphoneos-arm64.deb" onto the iOS Device.

```bash
ssh mobile@iphone_ipaddress
sudo su
dpkg -i frida_16.5.2_iphoneos-arm64.deb
```

### Run the Script

```bash
frida -U -f <AppBundle> -l path/to/script.js 
```


## Disclaimer / Legal Notice

These scripts and templates are provided for **educational and research purposes only**.  
They are intended to support learning, security testing, and reverse engineering within **authorized environments**.  

- Do **not** use these tools against applications, systems, or devices without **explicit permission**.  
- Unauthorized use may violate local, state, or international laws.  
- The authors and contributors take **no responsibility** for any misuse or damage caused by the use of these materials.  

By using the contents of this repository, you agree to take full responsibility for your actions and to comply with all applicable laws and regulations.  

## License

This repository is released under the [MIT License](https://opensource.org/licenses/MIT).  

You are free to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the software, provided that the original copyright notice and this permission notice are included in all copies or substantial portions of the software.  

The software is provided **"as is"**, without warranty of any kind, express or implied, including but not limited to the warranties of merchantability, fitness for a particular purpose, and noninfringement. In no event shall the authors or copyright holders be liable for any claim, damages, or other liability, whether in an action of contract, tort, or otherwise, arising from, out of, or in connection with the software or the use or other dealings in the software.  

## References

<ins>Blog Articles</ins>
- https://appledb.dev/firmware.html
- https://www.romainthomas.fr/post/22-08-singpass-rasp-analysis/
- https://learnfrida.info/macos/
- https://github.com/iddoeldor/frida-snippets
- https://awakened1712.github.io/hacking/hacking-frida/
- https://github.com/doronz88/swift_reversing
- https://github.com/swiftlang/swift/tree/main/docs/ABI
- https://github.com/ghidraninja/ghidra_scripts
- https://knight.sc/reverse%20engineering/2019/07/17/swift-metadata.html
- https://github.com/federicodotta/Brida
- https://github.com/dpnishant/appmon

<ins>YouTube Reversing iOS</ins>
- [iObfuscate Unraveling iOS Obfuscation Techniques - Laurie Kirk](https://www.youtube.com/watch?v=5JuSp_7Xf1o).
- [iOS Reverse Engineering With Frida - Christine Fossaceca](https://www.youtube.com/watch?v=miSg0Km2V-w) 


## Credits / Acknowledgements

This repository was created and shared as part of the [OWASP AppSec Singapore 2025](https://singapore.appsecdays.org/) conference.  

Special thanks to:  
- The **OWASP community** for providing a platform to exchange knowledge and promote secure development practices.  
- Colleagues, and peers who provided feedback, insights, and encouragement throughout the preparation of this talk.  

If you find these scripts useful, please consider acknowledging the source when reusing or adapting them in your own work.  

