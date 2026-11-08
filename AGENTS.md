<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Serve the Bible sales page through the TanStack index route; the legacy root HTML is reference-only, so preview and published rendering share one implementation.
- Keep Bible page styling scoped and media variants in CDN asset pointers; explicit image dimensions and responsive sources prevent layout shifts and oversized downloads.
