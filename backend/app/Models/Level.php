<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;

class Level extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'name',
    ];

    public function developers(): HasMany
    {
        return $this->hasMany(Developer::class);
    }

    public function scopeName($query, $name = null)
    {
        if (!is_null($name)) {
            $query->where('name', 'LIKE', "%$name%");
        }
    }
}
