# Electron Demo

This repository shows you how to use Okta in an Electron application. Please read [Electron Okta SDK][blog] to see how it was created.

**Prerequisites:**

- [Node 14](https://nodejs.org/)
- [Okta CLI](https://cli.okta.com)
- [Electron](https://www.electronjs.org/)

> [Okta](https://developer.okta.com/) has Authentication and User Management APIs that reduce development time with instant-on, scalable user infrastructure. Okta's intuitive API and expert support make it easy for developers to authenticate, manage and secure users and roles in any application.

* [Getting Started](#getting-started)
* [Links](#links)
* [Help](#help)
* [License](#license)

## Getting Started

To run this example, run the following commands:

```bash
git clone https://github.com/nickolasfisher/Okta_ElectronDemo/new/master?readme=1
cd Okta_ElectronDemo
```

### Create an OIDC Application in Okta

Create a free developer account with the following command using the [Okta CLI](https://cli.okta.com):

```shell
okta register
```

If you already have a developer account, use `okta login` to integrate it with the Okta CLI. 

Provide the required information. Once you register, create a client application in Okta with the following command:

```shell
okta apps create
```

You will be prompted to select the following options, otherwise leave the default option:
- Type of Application: **3: Native App (mobile)**

The application configuration will be printed to your screen:

```shell
Okta application configuration:
Issuer:    {yourOktaDomain}/oauth2/default
Client ID: {yourClientId}
```
If you haven't done so already, install the dependencies.

```shell
npm install
```

In `main.js` replace *{youreOktaDomain}* with your Okta domain and *{yourClientId}* with your client Id.

Start the Electron app.

```shell
npm run start
```

## Links

This example uses the following open source libraries from Okta:

* [Okta Auth Js](https://github.com/okta/okta-auth-js)
* [Okta CLI](https://github.com/okta/okta-cli)

## Help

Please post any questions as comments on the [blog post][blog], or visit our [Okta Developer Forums](https://devforum.okta.com/).

## License

Apache 2.0, see [LICENSE](LICENSE).

[blog]: https://developer.okta.com/blog/2021/xyz
