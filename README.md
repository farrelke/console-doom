## Console Doom

DOOM® is a registered trademark of ZeniMax Media Inc. in the US and/or other countries. Id Software® is a registered trademark of ZeniMax Media Inc. in the US and/or other countries. WebDOOM is in no way affiliated with ZeniMax Media Inc. or id Software LLC and is not approved by ZeniMax Media Inc. or id Software.

Doom is © 1993-1996 Id Software, Inc.; Boom 2.02 is © 1999 id Software, Chi Hoang, Lee Killough, Jim Flynn, Rand Phares, Ty Halderman; PrBoom+ is © 1999 id Software, Chi Hoang, Lee Killough, Jim Flynn, Rand Phares, Ty Halderman, © 1999-2000 Jess Haas, Nicolas Kalkhof, Colin Phipps, Florian Schulze, © 2005-2006 Florian Schulze, Colin Phipps, Neil Stevens, Andrey Budko; Chocolate Doom is © 1993-1996 Id Software, Inc., © 2005 Simon Howard; Strawberry Doom is © 1993-1996 Id Software, Inc., © 2005 Simon Howard, © 2008-2010 GhostlyDeath; Crispy Doom is © 2014-2018 Fabian Greffrath. WebAssembly DOOM is © 2018-2019 Viktor Lázár.

SDL 2.0, SDL_mixer 2.0 and SDL_net 2.0 are © 1997-2016 Sam Lantinga.

Secret Rabbit Code (libsamplerate) is © 2002-2011 Erik de Castro Lopo; Libpng is © 1998-2014 Glenn Randers-Pehrson, © 1996-1997 Andreas Dilger, © 1995-1996 Guy Eric Schalnat, Group 42, Inc.; Zlib is © 1995-2013 Jean-loup Gailly and Mark Adler.

Emscripten is © 2010-2018 Emscripten authors, see AUTHORS file.


## doom.js/doom.wasm build information

This project is built using the wasm/js files generated from this project https://github.com/rojo2/wasm-doom.

I have slightly modified the generated file to fetch the music files from https://console-doom.netlify.com when not using localhost.




## Add console.doom to your site

Just add this script to your site
```js
var isDoomLoaded = false;
console.doom = function() {
  if (isDoomLoaded) return;
  isDoomLoaded = true;
  console.log("Loading doom.js...");
  var script = document.createElement("script");
  script.src = "https://console-doom.netlify.app/main.js";
  document.head.appendChild(script);
};
```
