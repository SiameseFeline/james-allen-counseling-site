# Nav patch pending

Branch `feat/speaking-nav-links` is ready for HTML nav updates.

Run locally from repo root after `git fetch && git checkout feat/speaking-nav-links`:

```bash
# Homepage nav + speaking CTA
sed -i '' 's|<a href="#services">Services</a><a href="#about">About James</a><a href="#approach">Approach</a><a href="#faq">FAQ</a><a href="#visit">Visit</a>|<a href="#services">Services</a><a href="#about">About James</a><a href="/speaking-seminars/">Speaking</a><a href="#approach">Approach</a><a href="#visit">Visit</a>|' index.html

sed -i '' 's|To ask about a speaking engagement, call the office at|See the <a href="/speaking-seminars/">full seminar topic list</a>, or call the office at|' index.html

# Inner pages nav
for d in about-james-allen marriage-counseling family-counseling adhd-support addiction-recovery anger-management-conflict-resolution; do
  sed -i '' 's|<a href="/#services">Services</a><a href="/about-james-allen">About James</a><a href="/#approach">Approach</a><a href="/#faq">FAQ</a><a href="/#visit">Visit</a>|<a href="/#services">Services</a><a href="/about-james-allen/">About James</a><a href="/speaking-seminars/">Speaking</a><a href="/#approach">Approach</a><a href="/#visit">Visit</a>|' "$d/index.html"
done

# Footer link on all pages that list anger management
for f in index.html about-james-allen/index.html marriage-counseling/index.html family-counseling/index.html adhd-support/index.html addiction-recovery/index.html anger-management-conflict-resolution/index.html; do
  grep -q 'Speaking &amp; Seminars' "$f" && continue
  sed -i '' 's|Anger Management &amp; Conflict Resolution</a></li>|Anger Management \&amp; Conflict Resolution</a></li>\n              <li><a href="/speaking-seminars/">Speaking \&amp; Seminars</a></li>|' "$f"
done

git add -A && git commit -m "Add Speaking to sitewide nav and footer" && git push -u origin feat/speaking-nav-links
```

Then open PR into main and merge after Smoke passes.
