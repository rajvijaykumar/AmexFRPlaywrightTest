# AmexFRPlaywrightTest

## Running Tests and Generating Allure Report

### 1. Run Tests and Generate Allure Report

To execute your Playwright tests and generate a fresh Allure report, use the following command:

```sh
npm run generateReport
```

This will:
- Clean old `allure-results` and `allure-report` folders
- Run all Playwright tests
- Generate a new Allure report in the `allure-report` folder
- Open the Allure report in your browser

### 2. Open the Allure Report Manually

If you want to serve the report manually, use a static server (do not open the HTML file directly):

```sh
npx http-server allure-report -p 8081
```
Then open [http://localhost:8081/index.html](http://localhost:8081/index.html) in your browser.

### 3. Test Data Location

Test data is maintained in [`utils/testData.json`](utils/testData.json).

---

## Useful Scripts

- Run smoke tests and generate Allure report:
  ```sh
  npm run PROD:FR:Smoke:main
  ```

- Run all tests and generate Allure report:
  ```sh
  npm run generateReport
  ```

---

## Project Structure

- `tests/` - Test specs
- `pages/` - Page Object Models
- `utils/testData.json` - Test data
- `allure-results/` - Allure raw results
- `allure-report/` - Generated Allure report

---

## Notes

- Always use the `--clean` flag with Allure to avoid stale results.
- Do not open `allure-report/index.html` directly from the filesystem; use a local server.
- Assumptions:
  - Node.js and npm are installed on your system.
  - Allure Commandline is installed globally (`npm install -g allure-commandline`) or available via `npx`.
  - Playwright and required reporters are installed as dev dependencies.
  - Test data and configuration files are maintained as described above.
  - If you encounter port conflicts (e.g., Jenkins running on 8080), use a different port for your static server.