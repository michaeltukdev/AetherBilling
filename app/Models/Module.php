<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Module extends Model
{
    protected $fillable = ['name', 'type', 'description', 'is_active'];

    public function servers()
    {
        return $this->hasMany(Server::class);
    }
}
