<?php

namespace App\Modules;

abstract class AbstractModule
{
    protected $config;

    public function initialize(array $config)
    {
        $this->config = $config;
    }

    abstract public function makeApiCall(string $endpoint, array $data = []);
}