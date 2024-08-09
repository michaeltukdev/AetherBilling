<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('servers', function (Blueprint $table) {
            $table->id();
            $table->string('name', 255);
            $table->string('hostname', 255)->nullable();
            $table->string('ip_address', 255)->nullable();
            $table->integer('monthly_cost')->nullable();
            $table->integer('max_accounts')->nullable();
            $table->boolean('enabled')->default(true);
            $table->json('nameservers')->nullable();
            $table->foreignId('module_id')->constrained('modules');
            $table->string('module_username', 255)->nullable();
            $table->string('module_password', 255)->nullable();
            $table->text('module_api_token')->nullable();
            $table->boolean('is_secure')->default(true);
            $table->integer('port')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('servers');
    }
};
