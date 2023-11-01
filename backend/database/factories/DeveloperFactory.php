<?php

namespace Database\Factories;

use App\Models\Level;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Developer>
 */
class DeveloperFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $birth_date = $this->faker->dateTimeBetween($startDate = '-40 years', $endDate = '-18 years');

        return [
            'name' => $this->faker->name,
            'level_id' => Level::all()->random()->id,
            'gender' => $this->faker->randomElement(['Masculino', 'Feminino', 'Outro']),
            'birth_date' => $birth_date,
            'age' => now()->diffInYears($birth_date),
            'hobby' => $this->faker->words('4', true),
        ];
    }
}
