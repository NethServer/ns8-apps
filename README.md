# NS8 Apps

**Site: [stephdl.github.io/ns8-apps](https://stephdl.github.io/ns8-apps/)**

A catalog of every NethServer 8 application, official and community. It is rebuilt four times a day.

You can search apps by name, description or developer, and browse them by category or by forge. When several developers publish the same software, you can compare their variants. Each app page shows the stable version, how to install it from the Software Center, and a quality score.

## Two words used everywhere

A **forge** is a software repository. It serves `ns8/updates/repodata.json`, the list of apps an administrator installs from the Software Center. NethForge is a forge. So is your fork of it.

A **code repository** holds the source code of one app. It is the one in `docs.code_url` of the app's `metadata.json`, for example `jane/ns8-myapp`.

One forge publishes many apps. Each app has its own code repository.

## Get your app listed

The catalog lists only what an administrator can install. A code repository alone is not enough, the app must be published in a forge.

### Requirements

1. **Publish the app in a forge.** The usual way is to fork [ns8-nethforge](https://github.com/NethServer/ns8-nethforge) and add one folder for your app. Its workflow builds `repodata.json` with [ns8-repomd](https://github.com/NethServer/ns8-repomd) and publishes it on the `repomd` branch.
2. **Make the forge findable.** One of these is enough:
   - it is a fork of `NethServer/ns8-nethforge`,
   - it is a public GitHub repository with `ns8` in its name or the `ns8` topic, and it serves `repodata.json` on its default branch, on a `repomd` branch, or on GitHub Pages,
   - it is listed in `sources.yml`. Use this for a forge hosted anywhere else, such as GitLab Pages or your own web server. Open a pull request.
3. **Publish at least one app of your own.** A fork that only republishes NethForge apps is skipped.

Each app folder needs a `metadata.json` with real values, as created by [ns8-kickstart](https://github.com/NethServer/ns8-kickstart):

```json
{
  "name": "myapp",
  "description": {
    "en": "Self-hosted photo library with face recognition and mobile backup."
  },
  "categories": ["multimedia"],
  "authors": [{ "name": "Jane Doe", "email": "jane@example.org" }],
  "docs": {
    "documentation_url": "https://github.com/jane/ns8-myapp#readme",
    "bug_url": "https://github.com/jane/ns8-myapp/issues",
    "code_url": "https://github.com/jane/ns8-myapp"
  },
  "source": "ghcr.io/jane/myapp"
}
```

Versions come from the image tags that `createrepo.py` writes into `repodata.json`. Use semantic versioning: `1.0.0` for a stable release, `1.0.0-testing.1` for a testing one.

### My app is not listed

Check these points in order:

1. The forge serves `ns8/updates/repodata.json`, and your app is in it.
2. If the forge is a fork of `NethServer/ns8-nethforge`, at least one of its apps has a `docs.code_url` owned by the same GitHub account as the fork. Otherwise the fork is treated as a copy of NethForge.
3. If the forge is not a fork, it is public and has `ns8` in its name or the `ns8` topic. It serves `repodata.json` on its default branch, on a `repomd` branch, or on GitHub Pages. For Pages, the crawler tries the repository homepage and `https://<owner>.github.io/<repo>/`, at the root and under `ns8/updates/`.
4. The forge is not under the `NethServer` or `nethesis` organizations. Their apps already come from the official forge.
5. The app is not a system module installed with the core (`core`, `traefik`, `loki`, `metrics`, `ldapproxy`).
6. Nobody hid the forge or the app. See [Hide a forge or an app](#hide-a-forge-or-an-app).
7. The next crawl has run. It runs at most six hours later, or ask for a manual run.

If none of this helps, open an issue here with the URL of your forge.

## Quality score

Each app page shows a score out of 9, with a "How to improve" link to this section. The score does not judge the software. It measures how complete the listing is, so administrators can choose with confidence. The "Best quality" sort ranks apps by this score.

The crawler computes every check from public data. You fix them in your own repositories. The new score shows up after the next crawl.

| Check | Passes when | How to fix it |
| --- | --- | --- |
| GitHub topic `ns8` | The code repository has the `ns8` topic. | GitHub: gear icon next to "About", then Topics. GitLab: Settings › General › Topics. |
| Standard categories | `categories` is not empty, and every entry is a Software Center category: `collaboration`, `communication`, `core`, `database`, `development`, `documentation`, `monitoring`, `multimedia`, `office`, `security`, `storage`, `system_administration`, `web`. | Replace custom names in `metadata.json`. Case does not matter, and a few synonyms are accepted (`system` counts as `system_administration`, `audio` as `multimedia`). |
| Logo | The app has a logo in `repodata.json`. | Put a `logo.png` next to `metadata.json` in your forge. |
| Screenshots | The app has at least one screenshot in `repodata.json`. | Put PNG files in a `screenshots/` folder next to `metadata.json`. |
| Description of 60+ characters | `description.en` is at least 60 characters long. | Write one or two sentences about what the software does for the user. "NS8 module for Foo" does not help. The site may show a longer text from your README, but only `description.en` counts. |
| Translated description | `description` has a language besides `en`. | Add `fr`, `it`, `de`, `es` or any other. Visitors see their own language when it exists. |
| Documentation and bug links | `docs.documentation_url` and `docs.bug_url` are both set. | Fill both in `metadata.json`. Your README and your issue tracker are fine. |
| Minimum core label | The image of the version shown has the `org.nethserver.min-core` label. | Add `--label="org.nethserver.min-core=3.x.y"` in `build-images.sh` and publish a release. |
| License file | GitHub or GitLab detects a license in the code repository. | Add a `LICENSE` file with a standard license at the root. |

When `docs.code_url` is missing or points to a repository the crawler cannot read, the topic and license checks fail, and stars and dates stay empty.

## Badges

| Badge | Shown when | How to remove it |
| --- | --- | --- |
| Official | The app comes from the official NS8 forge. | It cannot be added to a community app. |
| testing (orange version) | The app has a pre-release newer than its stable release, or no stable release. Any semver suffix (`-testing.1`, `-dev.2`, `-rc1`) makes a pre-release. | Publish a stable release without a suffix, such as `1.2.0`. |
| unmaintained | The stable release is more than a year old, and no testing release came after it. The date is the GitHub release of the tag, or the tagged commit when there is no release. | Publish a new stable or testing release. The git tag must match the version in `repodata.json`. Apps whose code is not on GitHub never get this badge. |
| archived | The code repository is archived. | Unarchive it, or point `docs.code_url` to the repository where work continues. |
| Runs as root | The image has `org.nethserver.rootfull=1`. | This is information, not a penalty. |
| N variants | Several forges publish an app with the same module id. | Nothing to fix. Users compare the variants on the app page. |

## Install instructions

The app page tells users how to add your forge in the Software Center. It shows the URL from the `CNAME` file of the published branch, and the raw GitHub URL of that branch as an alternative. Without a `CNAME`, only the raw URL is shown.

## Hide a forge or an app

**If you maintain the repository**, add the `ns8-noindex` topic to it. On GitHub, click the gear icon next to "About", then Topics. On GitLab, go to Settings › General › Topics.

| You want to hide | Add the topic to |
| --- | --- |
| your whole forge | the forge |
| one app, in every forge that publishes it | the code repository of that app |

Remove the topic to bring it back.

**Otherwise**, open a pull request that adds a line to `exclude_repos` in `sources.yml`. Use this too for a forge that is not on GitHub.

| You want to hide | Line to add |
| --- | --- |
| a whole forge | `owner/ns8-forge` |
| one app from one forge | `owner/ns8-forge:myapp` |
| one app, in every forge | `owner/ns8-myapp`, its code repository |
| a forge listed by `url` in `sources.yml` | its `id`, or `id:myapp` for one app |

Changes show up after the next crawl.

## Same software, several developers

Apps are grouped by module id. So `lamp` from NethForge and `lamp` from another forge appear side by side on one page. When two developers use different ids for the same software, such as `kuma` and `uptime-kuma`, add an alias in `sources.yml`.

## `sources.yml`

```yaml
forges:                  # forges the crawler cannot find by itself
  - id: someone
    url: https://example.org/ns8/updates/
  - id: other
    github: owner/ns8-repo
exclude_orgs:            # GitHub organizations skipped by discovery
  - NethServer
exclude_repos:           # see "Hide a forge or an app"
  - owner/ns8-forge:myapp
exclude_apps:            # module ids that are not apps
  - core
aliases:                 # group two module ids as one app
  uptime-kuma: kuma
```

## Where the data comes from

The crawler reads the official forge, NethForge, every fork of `NethServer/ns8-nethforge` that publishes its own apps, any other GitHub repository that serves `ns8/updates/repodata.json`, and the forges in `sources.yml`. It finds GitHub repositories by name and by the `ns8` topic.

`repodata.json` gives names, descriptions, categories, logos, screenshots, versions and image labels. The crawler adds stars, last activity, license, topics and release dates from each code repository, on GitHub or GitLab.

The app page also shows technical details from the image labels: whether the module runs as root, its container images, the permissions it asks for, its reserved ports and its volumes.

## Run it locally

```sh
pip install -r requirements.txt
python crawler/crawl.py --cache   # uses `gh auth token` when GITHUB_TOKEN is unset
python -m http.server -d docs
```

`--cache` stores HTTP answers in `.cache/`, so a rerun is fast. Delete that folder to fetch fresh data. A topic you just added is seen only without the cache.

The GitHub Action in `.github/workflows/crawl.yml` runs the crawler four times a day, at 00:55, 06:55, 12:55 and 18:55 UTC. That is half an hour after the forges rebuild their `repodata.json`. It commits `docs/catalog.json` when it changes and deploys `docs/` to GitHub Pages.
