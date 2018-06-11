<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateVentasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('ventas', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('idUser');
            $table->string('usuario',15);
            $table->Integer('idProd');
            $table->Integer('codVenta');
            $table->Integer('totalVenta');
            $table->date('fechaVenta');
            $table->string('formaVenta');
            $table->string('tipoventa');
            $table->foreign('usuario')->references('usuario')->on('users');
            //$table->foreign('usuario')->references('usuario')->on('users');
            //$table->foreign('idProd')->references('id')->on('products');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('ventas');
    }
}
