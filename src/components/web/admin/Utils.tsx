export function CopyText(p: { text: string | number }) {
    return (
        <span class="tooltip cursor-pointer" data-tip="📋 copy"
            onmouseover={`this.setAttribute("data-tip", "📋 copy");`}
            onclick={`navigator.clipboard.writeText("${p.text}"); this.setAttribute("data-tip", "✅ copied") `}>
            {p.text}
        </span>
    );
}
