build:
	@docker-compose build --no-cache

stop:
	@docker-compose stop

up:
	@docker-compose up -d

down:
	@docker-compose down

# BACKEND
composer-update:
	@docker exec -it backend_container bash -c "composer update"

composer-install:
	@docker exec -it backend_container bash -c "composer install"

composer-require:
	@docker exec -it backend_container bash -c "composer require ${package}"

migration:
	@docker exec -it backend_container bash -c "php artisan make:migration $(name)"

migrate:
	@docker exec -it backend_container bash -c "php artisan migrate"

migrate-fresh:
	@docker exec -it backend_container bash -c "php artisan migrate:fresh"

seeder:
	@docker exec -it backend_container bash -c "php artisan make:seeder	 $(name)"

factory:
	@docker exec -it backend_container bash -c "php artisan make:factory $(name) --model=${model}"

seed: 
	@docker exec -it backend_container bash -c "php artisan db:seed"

controller:
	@docker exec -it backend_container bash -c "php artisan make:controller $(name)"

model:
	@docker exec -it backend_container bash -c "php artisan make:model $(name)"

