dc := user=$(USER) docker-compose -f ./docker/docker-compose.yml

.PHONY: init
init:
	cp ./api/.env.example ./api/.env
	$(dc) up -d --build
	bash ./docker/mysql/sql.sh

.PHONY: up
up:
	$(dc) up -d --build

.PHONY: down
down:
	$(dc) down

.PHONY: restart
restart:
	$(dc) restart

.PHONY: rm
rm:
	$(dc) down --rmi all

.PHONY: logs
logs:
	$(dc) logs -f

.PHONY: db
db:
	$(dc) exec db /bin/sh

.PHONY: api
api:
	$(dc) exec express /bin/sh

.PHONY: app
app:
	$(dc) exec react /bin/sh

.PHONY: start
start:
	$(dc) exec express /bin/sh -c "npm start"

.PHONY: migrate
migrate:
	cp ./api/.env.example ./api/.env
	$(dc) exec express npx prisma migrate dev

.PHONY: generate
generate:
	$(dc) exec express npx prisma generate
