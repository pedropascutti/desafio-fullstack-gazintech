<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class DeveloperResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        $array = [
            'id' => $this->id,
            'level_id' => $this->level_id,
            'level' => $this->level,
            'name' => $this->name,
            'gender' => $this->gender,
            'birth_date' => $this->birth_date,
            'age' => $this->age,
            'hobby' => $this->hobby,
            'created_at' => Carbon::make($this->created_at)->format('Y-m-d'),
            'updated_at' => Carbon::make($this->updated_at)->format('Y-m-d')
        ];

        return $array;
    }
}
