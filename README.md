# MightTable

Metascript plugin for LightTable

# Installation

* Clone the project into LightTable plugins directory
```
cd ~/.config/LightTable/Plugins
git clone git@github.com:bamboo/MightTable.git
cd MightTable
```
* Install the meta-script package
```
lein npm install
```
* Open src/lt/plugins/metascript.cljs in LightTable and execute the command "Editor: build file or project"

# TODO

* error display
 * show nested errors together with the main error
 * clicking the nested error goes to the referenced location

* error navigation
 * goto next error
 * goto previous error

* original error location
 * if there's an original location display icon to jump to that location
 * to test write a macro that produces wrong code (coming from quoted code)

* error pad
 * show all errors


