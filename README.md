# The Weather Forecat

A weather app, an ode to my cat, and an excuse to play with data and shaders

## Quick start

Start server:

```
cd server
yarn install
yarn start
```

Start client:

```
cd client
yarn install
yarn start
```

## Technologies & Tools

- [Apollo GraphQL](https://www.apollographql.com/)
- [Neutrino (testing version 9.0.0-rc.3)](https://master.neutrinojs.org/)
- [WebGL](https://get.webgl.org/)
- [three.js](https://threejs.org/)
- [OpenWeatherMap API](https://openweathermap.org/)

## Motivations

1. After many talks and workshops on GraphQL, now I wanted to try to use it
2. I'm super interested in design. I want to experiment with data, and create a visual representation of it with interactive 3D graphics
3. .. so, I'm trying to learn WebGL. It's quite a vast subject, so after some fiddling, and some external advice, I'm studying how shaders work. This is part of that
4. A Weather App seems a simple enough App so that I can concentrate on the issues above
5. I like a nice development environment, and I like the Neutrino project, so I'm testing how that works out too

## What I want my catapp to do (for now)

- Fetch the weather data for a given city
  - conditions
  - temperature
  - wind (later)
- Do an animation according to the weather

## Roadmap

- Get client sorted with OpenWeatherMap API call - OK
- Create GraphQL server for Weather Data - OK
- Create Visuals for Weather data
  - Display cat in a Shader material! - OK
    - help and comments from here: [Three.js: Indexed Buffer Geometry with Texture and Custom Shader Attributes](https://bl.ocks.org/duhaime/c8375f1c313587ac629e04e0253481f9)
    - this is a great resource btw! 👉 [bl.ocks.org](https://bl.ocks.org/)
  - This will take me longer than I thought - shaders are complex. (working on it!)
  - I realize I need to think carefully about what I'm doing in the shaders in order to do what I want to do and not just some lucky copy/paste that happens to work (which I have also tried of course ...)
  - It ~should be~ is fun :)
- Make sure it won't eat all the resources in the machine

## Some Resources

The docs of the projects mentioned above

### Shaders

- [The Book of Shaders](https://thebookofshaders.com/)
- [threejs fundamentals](https://threejsfundamentals.org/)
- [WebGL Fundamentals](https://webglfundamentals.org/)
- [LearnWebGL | Fragment shader debugging](http://learnwebgl.brown37.net/09_lights/fragment_shader_debugging.html)
- > The easiest way to minimize debugging is to write a correct shader program that functions correctly.
- ^ I'm going to follow this advice
- [Tympanus How to Create a Fake 3D Image Effect with WebGL](https://tympanus.net/codrops/2019/02/20/how-to-create-a-fake-3d-image-effect-with-webgl/)
- above all, this made me realise I need to pay more attention to each line of code I'm using
