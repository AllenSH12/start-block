start-block
===========

A grunt-init template for web dev using Grunt.js, Handlebars &amp; LESS

To get started:

        git clone https://github.com/AllenSH12/start-block.git ~/.grunt-init
        cd /new/project/destination
        grunt-init start-block
        npm install

You'll have to manually edit your package.json file to set the location of the development directory. The easiest way is to add a key/value pair like so:

        "destination": "dev"
        
Now if you create a folder named "dev" in your project directory the .hbs templates will compile to it. Add an "assets" directory inside of "dev" to set a destination for compiled .less
