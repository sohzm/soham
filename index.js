#!/usr/bin/env node

const text = `

\x1b[1;34mSoham Bharambe\x1b[0m

\x1b[90mhello@soham.sh      \x1b[31mhttps://soham.sh\x1b[90m      \x1b[32mhttps://github.com/sohzm\x1b[90m      \x1b[34mhttps://twitter.com/soham_btw\x1b[0m


\x1b[1mEDUCATION\x1b[0m
B.Tech in Mechanical Engineering, MIT Academy of Engineering                                2019-2023

\x1b[1mEXPERIENCE\x1b[0m
SRE, Obmondo.com                                                                  Aug 2023 - Jun 2024
iOS Developer Intern, Raja Software Labs                                          Jan 2023 - May 2023
Backend Developer Intern, AwesomeSuite                                            May 2022 - Jan 2023

\x1b[1mOPEN SOURCE\x1b[0m
- \x1b[32mMattermost\x1b[0m: fixing race condition and worked on a theming bug.
- \x1b[32mStable-Diffusion.cpp\x1b[0m: added vulkan backend support for diffusion model inference.
- My open-source work extends to multiple projects, which is available at \x1b[32mhttps://soham.sh/opensource\x1b[0m

\x1b[1mPROJECTS\x1b[0m
- \x1b[32mhttps://github.com/sohzm/haskii\x1b[0m: Haskell based ASCII art generator
- \x1b[32mhttps://github.com/sohzm/shvet\x1b[0m: Go CLI for image manipulation
- \x1b[32mhttps://github.com/sohzm/zson\x1b[0m: Zig based JSON prettifier
- \x1b[32mhttps://github.com/sohzm/zapp\x1b[0m: IPython frontend
- \x1b[32mhttps://github.com/sohzm/nexmail\x1b[0m: Multithreaded Python GUI Email Client

\x1b[1mSKILLS\x1b[0m
\x1b[90mLanguages:\x1b[0m C++, Python, Go, JavaScript
\x1b[90mTechnologies:\x1b[0m Docker, Kubernetes, Puppet, Jenkins, Linux


for my full resume, visit \x1b[32mhttps://soham.sh/r\x1b[0m
`;

let index = 0;
const delay = 5; // 100ms delay between each character

function printCharByChar() {
    if (index < text.length) {
        process.stdout.write(text[index]);
        index++;
        setTimeout(printCharByChar, delay);
    }
}

printCharByChar();
