## Testing and Temporary Files

When testing scripts, configurations, or code that requires creating
temporary artifacts:

**ALWAYS use `/tmp/` for test files and folders**

* Create isolated test environments in `/tmp/` (e.g., `/tmp/test-$$` or `/tmp/test-$(date +%s)`)
* Never create test artifacts in the project directory
* Clean up `/tmp/` directories after testing completes

**Examples:**

* ❌ Creating test folders like `.lefthook/` or `test-data/` in the project
* ❌ Creating temporary config files for testing in the project root
* ✅ Using `/tmp/test-myfeature/` for all test artifacts
* ✅ Copying files to `/tmp/` before running tests on them

**Exception:** Only write to the project directory for actual deliverables
or when explicitly requested by the user.

**Testing frequency:**

* Testing is NOT required after every change
* Only test when:

  * Making significant or complex changes
  * Explicitly requested by the user
  * The change could break existing functionality
* Trust simple refactoring and straightforward changes without always testing

## Build Frequency

* Do NOT run `npm run build` after every small visual tweak
* Run a build only when:

  * A significant layout or rendering change is complete
  * A structural refactor could have broken the app
  * The user explicitly asks for verification

## Refactoring Standard

* Never do a quick patch when a refactor is needed
* If the current structure is causing repeated UI or layout regressions, refactor it instead of layering another workaround
* Prefer fixing spacing, alignment, and component structure at the system level rather than patching one screenshot-specific symptom
