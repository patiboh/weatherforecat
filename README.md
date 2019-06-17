# The Weather Forecat

A weather app, an ode to my cat, and an excuse to play with data and shaders

## Technologies & Tools

- [GraphQL](https://graphql.org/)
- [Apollo](https://www.apollographql.com/docs/)
- [Neutrino (testing version 9.0.0-rc.3)](https://neutrinojs.org/)
- [WebGL](https://get.webgl.org/)
- [three.js](https://threejs.org/)
- [OpenWeatherMap API](https://openweathermap.org/current)

## Motivations

1. After many talks and workshops on GraphQL, now I wanted to try to use it
2. I'm super interested in design. I want to experiment with data, and create a visual representation of it with interactive 3D graphics
3. .. so, I'm trying to learn WebGL. It's quite a vast subject, so after some fiddling, and some external advice, I'm studying how shaders work. This is part of that
4. A Weather App seems bothe a simple enough App so that I can concentrate on the issues above
5. I like a nice development environment, and I like the Neutrino project, so I'm testing how that works out too

## What I want my catapp to do (for now)

- Fetch the weather data for a given city
  - conditions
  - temperature
  - wind (later)
- Do an animation according to the weather

## Roadmap

- Get client sorted with OpenWeather API call - OK
- Create GraphQL server for Weather Data - En cours
- Create Visuals for Weather data - En cours
- Make sure it won't eat all the resources in the machine
