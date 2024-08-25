<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class RolesAndPermissionsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        app()[\Spatie\Permission\PermissionRegistrar::class]->forgetCachedPermissions();

        // Admin panel access
        Permission::create(['name' => 'access admin panel']);

        // User management permissions
        Permission::create(['name' => 'manage users']);
        Permission::create(['name' => 'view users']);
        Permission::create(['name' => 'create users']);
        Permission::create(['name' => 'edit users']);
        Permission::create(['name' => 'delete users']);

        // Role management permissions
        Permission::create(['name' => 'manage roles']);
        Permission::create(['name' => 'view roles']);
        Permission::create(['name' => 'create roles']);
        Permission::create(['name' => 'edit roles']);
        Permission::create(['name' => 'delete roles']);
        Permission::create(['name' => 'assign roles']);

        // Settings management permissions
        Permission::create(['name' => 'manage general settings']);

        // Server management permissions
        Permission::create(['name' => 'view servers']);
        Permission::create(['name' => 'create servers']);
        Permission::create(['name' => 'edit servers']);
        Permission::create(['name' => 'delete servers']);

        // Create default roles
        $adminRole = Role::create(['name' => 'admin']);
        $adminRole->givePermissionTo(Permission::all());

        $supportRole = Role::create(['name' => 'support']);
        $supportRole->givePermissionTo([
            'access admin panel',
            'manage users',
            'view users',
        ]);
    }
}
