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

}
