<script lang="ts">
  import { Card, CodeEditor, CodeLines, Field, MockButton } from "../mock";

  const code: string =
    'function showSaved() {\n  const toast = document.createElement("div");\n  toast.className = "toast";\n  toast.textContent = "Address saved";\n  document.body.append(toast);\n  setTimeout(() => toast.remove(), 5000);\n}\n\nsaveButton.addEventListener("click", async () => {\n  await saveAddress(form);\n  showSaved();\n});';
</script>

<div class="review">
  <CodeEditor filename="address.js">
    <CodeLines {code} start={1} />
  </CodeEditor>
  <div class="page">
    <Card title="Delivery address">
      <div class="form">
        <Field label="Street address" value="14 Rosemary Lane" />
        <Field label="City" value="Bristol" />
        <div class="actions"><MockButton variant="primary">Save</MockButton></div>
      </div>
    </Card>
    <div class="toast">Address saved</div>
  </div>
</div>

<style lang="scss">
  .review {
    display: grid;
    gap: 16px;
    width: 600px;
  }

  .page {
    position: relative;
    padding: 18px 18px 70px;
    border: 1px solid var(--mock-border);
    border-radius: 12px;
    background: var(--mock-bg);
    color: var(--mock-text);
    font-size: 13px;
  }

  .form {
    display: grid;
    gap: 12px;
  }

  .actions {
    display: flex;
    justify-content: flex-end;
  }

  .toast {
    position: absolute;
    right: 18px;
    bottom: 16px;
    padding: 10px 16px;
    border-radius: 10px;
    background: #1b1d23;
    color: #ffffff;
    font-weight: 600;
    box-shadow: var(--mock-shadow-lg);
  }
</style>
