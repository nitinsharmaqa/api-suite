# API suite

Playwright TypeScript checks against Restful Booker and JSONPlaceholder.

## Covered

- Health: JSONPlaceholder post 1 is up
- Auth: valid credentials return a token
- Auth failure: wrong password returns no token
- Create: a booking returns an id
- Not found: an unknown booking returns 404

## 2026-10-28
- api-suite README at repo root, CI green.

## Docker 2026-10-29

cd /c/Users/admin/documents/QA\ RETURN/api-suite
docker build -t api-suite .
docker run --rm api-suite

```bash
docker build -t api-suite .
docker run --rm api-suite