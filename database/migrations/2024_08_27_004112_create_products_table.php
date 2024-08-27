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
        Schema::create('products', function (Blueprint $table) {
            $table->id();

            $table->foreignId('product_groups_id')->constrained()->onDelete('cascade');

            $table->string('name');

            $table->string('headline')->nullable();

            $table->string('url')->nullable();

            $table->string('short_description', 255)->nullable();

            $table->text('description')->nullable();

            $table->string('color')->default('#000000');

            $table->boolean('requires_domain')->default(false);

            $table->boolean('is_visible')->default(true);

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
