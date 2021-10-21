dc := user=$(USER) docker-compose -f ./docker/docker-compose.yml

.PHONY: init
init:
	$(dc) up -d --build
	bash ./docker/mysql/sql.sh
	$(dc) exec -d express /bin/sh -c "npm start"

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