<?php

namespace Database\Seeders;

use App\Models\Level;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class LevelSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Level::create([
            'name' => 'Júnior A'
        ]);
        Level::create([
            'name' => 'Júnior B'
        ]);
        Level::create([
            'name' => 'Júnior C'
        ]);
        Level::create([
            'name' => 'Pleno A'
        ]);
        Level::create([
            'name' => 'Pleno B'
        ]);
        Level::create([
            'name' => 'Pleno C'
        ]);
        Level::create([
            'name' => 'Sênior'
        ]);
    }
}
