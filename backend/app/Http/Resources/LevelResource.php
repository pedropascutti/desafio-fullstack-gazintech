<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class LevelResource extends JsonResource
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
            'name' => $this->name,
            'created_at' => Carbon::make($this->created_at)->format('Y-m-d'),
            'updated_at' => Carbon::make($this->updated_at)->format('Y-m-d')
        ];

        if (isset($this->developers_amount)) {
            $array['developers_amount'] = $this->developers_amount;
        }

        return $array;
    }
}
