interface ApiEndpoint {
  get(): string[];
  post(request: { token: string; body: string }): void;
}

let httpServer: { [key: string]: ApiEndpoint } = {};

@registerEndpoint
class Families implements ApiEndpoint {
  private houses = ['Stark', 'Lannister', 'Targaryen'];

  get() {
    return this.houses;
  }

  @protect('123')
  post(request: { token: string; body: string }) {
    this.houses.push(request.body);
  }
}

@registerEndpoint
class Castles implements ApiEndpoint {
  private castles = ['Winterfell', 'Dragonstone', 'Pyke'];

  get() {
    return this.castles;
  }

  @protect('1234')
  post(request: { token: string; body: string }) {
    this.castles.push(request.body);
  }
}

function protect(token: string) {
  return function (target: any, key: string, descriptor: PropertyDescriptor) {
    const method = descriptor.value;

    descriptor.value = function (request: { token: string; body: string }) {
      if (request.token != token) {
        console.log('403 Forbidden');
      } else {
        const bindingOriginalFunction = method.bind(this);
        const result = bindingOriginalFunction(request);

        return result;
      }
    };
  };
}

function registerEndpoint(target: any) {
  const className = target.name;
  const endpointPath = '/' + className.toLowerCase();
  httpServer[endpointPath] = new target();
}

// registerEndpoint(Families);
// registerEndpoint(Castles);

httpServer['/families'].post({ token: '123', body: 'Marín' });
console.log(httpServer['/families'].get());
httpServer['/castles'].post({ token: '1234', body: 'Dorne' });
console.log(httpServer['/castles'].get());
