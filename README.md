# DragonRuby Egg (UI)
This is a modules manager for [DragonRuby](https://dragonruby.itch.io/dragonruby-gtk) that allows users to download modules for use in their projects. The application is developed using the [rubyjs-vite](https://github.com/filipvrba/ruby-js) tool, which transforms *RJS* scripts into native *JavaScript* scripts.

> ### Info
> It should be noted that the web application is just a prototype, a testing version that serves to verify functions and improve the user experience.

### Content
- [1 Adding Modules](#1-adding-modules)
- [2 Module Structure](#2-module-structure)
- [3 Module Installation](#3-module-installation)
- [4 Conclusion](#4-conclusion)
- [5 Contributors](#5-contributors)

## 1 Adding Modules

Users can add new modules to the website by clicking the *"add"* button. However, they will need to have their own GitHub account and a repository containing the module. After selecting the module, users can write a description to help others understand its functionality better.

## 2 Module Structure
It is recommended to structure the module folder so that it contains a subfolder called *"lib"* and within it, a subfolder with the module version. In this subfolder, the necessary scripts for Ruby, such as class and function files, are located.

For better organization and clarity, the folder for a specific module version can be further structured as needed, for example, a *"core"* folder for the module's core. This folder can contain a file *"version.rb"* with information about the module version and other files with the module's code.

*Here is an example of a module's tree structure:*
```text
.
└── lib
    └── core-1.0.0
        ├── core
        │   └── version.rb
        └── core.rb
```

Such a structure can help users easily find the necessary files and understand the module's organization.

## 3 Module Installation
[DragonRuby-Egg (CLI)](https://github.com/filipvrba/dragonruby-egg-rb) is an application that simplifies module installation. This tool allows users to easily install modules for use in their DragonRuby game projects.

The *"dre install"* command allows installing a specific module and placing it in the *"modules"* folder of the game project. All necessary scripts for using the module in the project will be available here.

When installing a module into the project, care is taken to ensure that it does not interfere with the project's architecture and that all necessary scripts are in the correct places. This allows for easy integration of the module into an existing project and minimizes the risk of conflicts with other parts of the project.

*Here is an example of using the* "dre install" *command to install the* "dr-core-rb" *module into the* "sandbox" *project located on the desktop:*
```bash
dre install dr-core-rb ~/Desktop/sandbox
```

After a successful installation, the *"dr-core-rb"* module will be available in the *"modules"* folder of the project.

## 4 Conclusion
DragonRuby-Egg is an ideal tool for game developers working with DragonRuby who want to improve their projects using modules and tools created by the DragonRuby community. GitHub plays a key role in DragonRuby-Egg because it allows for account authorization and access to the section for adding modules. If you want to add a module to DragonRuby-Egg, you must have a GitHub account and allow DragonRuby-Egg access to your repositories. Basic information such as nick name and public repository URL are subsequently rendered in the menu when inserting a new module.

Overall, DragonRuby-Egg is a useful tool for game developers working with DragonRuby who want to quickly and easily add modules to their projects. Thanks to its integration with GitHub and ease of use, DragonRuby-Egg offers a practical solution for module management in DragonRuby.

## 5 Contributors
- [Filip Vrba](https://github.com/filipvrba) - creator and maintainer