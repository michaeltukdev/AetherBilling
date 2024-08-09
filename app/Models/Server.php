<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Server extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'hostname',
        'ip_address',
        'monthly_cost',
        'max_accounts',
        'enabled',
        'nameservers',
        'module_id',
        'module_username',
        'module_password',
        'module_api_token',
        'is_secure',
        'port',
    ];

    protected $casts = [
        'monthly_cost' => 'integer',
        'max_accounts' => 'integer',
        'enabled' => 'boolean',
        'nameservers' => 'array',
        'is_secure' => 'boolean',
        'port' => 'integer',
    ];

    public function module()
    {
        return $this->belongsTo(Module::class);
    }
}
