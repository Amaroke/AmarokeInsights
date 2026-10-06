# Issue tracker: GitHub Issues

Issues and specs for this repo live in GitHub Issues on `Amaroke/AmarokeInsights`. Use the `gh` CLI for every operation.

## Conventions

- A spec is one issue labelled `enhancement`, its body holding the spec
- Implementation tickets are one issue each, attached to the spec as **sub-issues**, never a single combined tickets issue
- Blocking edges use GitHub's native **blocked by** relationship between issues
- Triage state is a label (see `triage-labels.md` for the strings), exactly one triage label per open issue
- Conversation history goes in issue comments
- Issue titles and bodies are in English, like commits and PR descriptions

## When a skill says "publish to the issue tracker"

```bash
gh issue create --title "<title>" --body-file <file> --label <label>
```

Attach a ticket to its spec:

```bash
gh api repos/Amaroke/AmarokeInsights/issues/<spec>/sub_issues -X POST -F sub_issue_id=<ticket id>
```

`<ticket id>` is the numeric `id` from `gh api repos/Amaroke/AmarokeInsights/issues/<number> --jq .id`, not the issue number.

Record a blocking edge (ticket `<blocked>` is blocked by `<blocker>`):

```bash
gh api repos/Amaroke/AmarokeInsights/issues/<blocked>/dependencies/blocked_by -X POST -F issue_id=<blocker id>
```

## When a skill says "fetch the relevant ticket"

```bash
gh issue view <number> --comments
```

The user will normally pass the issue number or URL directly.

## Wayfinding operations

Used by `/wayfinder`. The **map** is an issue with one **child** sub-issue per ticket.

- **Map**: an issue titled `Map: <effort>`, its body holding the Notes / Decisions-so-far / Fog sections.
- **Child ticket**: a sub-issue of the map, with the question in the body and a `type:research`, `type:prototype`, `type:grilling` or `type:task` label (create the label if missing).
- **Blocking**: native **blocked by** relationships. A ticket is unblocked when every blocker is closed.
- **Frontier**: list the map's open sub-issues that are unblocked and unassigned, lowest number first.
- **Claim**: assign yourself (`gh issue edit <n> --add-assignee @me`) before any work.
- **Resolve**: post the answer as a comment starting with `## Answer`, close the issue, then append a context pointer (gist + link) to the map's Decisions-so-far.
