# Dependency Management Patterns in JavaScript

This repository demonstrates practical examples of various techniques for managing and injecting dependencies in JavaScript projects. Each pattern is organized into its own folder with more than just trivial examples.

## Repository Structure

```
dependency-patterns-js/
├── DI/                # Constructor Injection (Manual DI)
│   ├── email-client.js
│   ├── sms-client.js
│   ├── notification-service.js
│   └── main.js
├── DI-container/      # IoC/DI Container
│   ├── container.js
│   ├── registry.js
│   ├── user-repository.js
│   ├── user-service.js
│   └── main.js
├── ESM/               # ES Modules
│   ├── math-utils.mjs
│   ├── data-provider.mjs
│   └── app.mjs
├── CJS/               # CommonJS Modules
│   ├── math-utils.js
│   ├── data-provider.js
│   └── app.js
├── Service-locator/   # Service Locator (Dependency Locator)
│   ├── locator.js
│   ├── cache-service.js
│   ├── api-client.js
│   ├── report-generator.js
│   └── main.js
└── README.md
```

---

## Dependency Patterns Overview

1. **ES Modules (ESM)**

   * Native, static `import`/`export` syntax
   * Build-time tree shaking and code splitting
   * Example: asynchronous data loading and statistical calculations

2. **CommonJS (CJS)**

   * Dynamic `require` and `module.exports`
   * Conditional module loading at runtime
   * Example: switching between synchronous and asynchronous data providers

3. **Constructor Injection (Manual DI)**

   * Dependencies passed explicitly to constructors or function parameters
   * Highest transparency and testability
   * Example: `NotificationService` using `EmailClient` and `SmsClient`

4. **Service Locator**

   * Central registry that components query to obtain dependencies
   * Quick setup but hides dependency graph and can lead to global state
   * Example: `ReportGenerator` retrieving `CacheService` and `ApiClient` from a locator

5. **IoC/DI Container**

   * Automated instantiation and injection based on configuration
   * Supports singleton and transient lifecycles
   * Example: `UserService` with `UserRepository` and in-memory cache

---

## Comparison of Patterns

| Pattern                   | IoC Level | Dependency Visibility | Testability | Configuration Complexity | Typical Use Cases                            |
| ------------------------- | --------- | --------------------- | ----------- | ------------------------ | -------------------------------------------- |
| **ESM**                   | None      | Static, explicit      | Hard        | None                     | Frontend apps, scripts needing tree shaking  |
| **CJS**                   | None      | Dynamic, implicit     | Medium      | None                     | Node.js CLIs, plugins with conditional loads |
| **Constructor Injection** | Partial   | High (constructor)    | Easy        | Low                      | Libraries, small services                    |
| **Service Locator**       | Partial   | Low (hidden)          | Hard        | Medium                   | Prototypes, legacy codebases                 |
| **DI Container**          | Full      | Medium (config-based) | Very Easy   | High                     | Large backend services, microservices        |