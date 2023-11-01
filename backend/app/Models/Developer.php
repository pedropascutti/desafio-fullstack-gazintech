<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\SoftDeletes;

class Developer extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'name',
        'gender',
        'birth_date',
        'age',
        'hobby'
    ];

    public function level():HasOne
    {
        return $this->hasOne(Level::class);
    }

}
