<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;

class Developer extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'name',
        'level_id',
        'gender',
        'birth_date',
        'age',
        'hobby'
    ];

    public function level():BelongsTo
    {
        return $this->BelongsTo(Level::class);
    }

    public function scopeName($query, $name = null)
    {
        if (!is_null($name)) {
            $query->where('name', 'LIKE', "%$name%");
        }
    }

    public function scopeLevelId($query, $level_id = null)
    {
        if (!is_null($level_id)) {
            $query->where("level_id", "=", $level_id);
        }
    }

    public function scopeGender($query, $gender = null)
    {
        if (!is_null($gender)) {
            $query->where("gender", "=", $gender);
        }
    }

    public function scopeAge($query, $age = null)
    {
        if (!is_null($age)) {
            $query->where("age", "=", $age);
        }
    }

    public function scopeHobby($query, $hobby = null)
    {
        if (!is_null($hobby)) {
            $query->whereRaw('hobby', 'LIKE', "%$hobby%");
        }
    }
}
