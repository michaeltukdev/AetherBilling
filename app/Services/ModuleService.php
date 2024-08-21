<?php

namespace App\Services;

use Exception;
use App\Models\Server;
use App\Modules\CpanelModule;
use App\Modules\PterodactylModule;

class ModuleService
{

    public function getModuleForServer(Server $server)
    {
        $module = $this->createModule($server->module->type);
        $module->initialize($server->toArray()); 
        return $module;
    }

    public function createModule(string $moduleType)
    {
        switch ($moduleType) {
            case 'pterodactyl':
                return new PterodactylModule();
            default:
                throw new Exception("Unsupported module type: {$moduleType}");
        }
    }
}
