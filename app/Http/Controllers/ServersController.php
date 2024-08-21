<?php

namespace App\Http\Controllers;

use Exception;
use Inertia\Inertia;
use App\Models\Module;
use App\Models\Server;
use Illuminate\Http\Request;
use App\Services\ModuleService;
use App\Services\ServersService;

class ServersController extends Controller
{
    protected ServersService $serverService;

    public function __construct()
    {
        $this->serverService = new ServersService();
    }

    public function ServersView()
    {
        return Inertia::render('Admin/Settings/Servers/Servers');
    }

    public function CreateView()
    {
        return Inertia::render('Admin/Settings/Servers/Create', [
            'modules' => Module::all()
        ]);
    }

    public function CreateServer(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|min:3|string',
            'hostname' => 'nullable|string',
            'ip_address' => 'nullable|ip',
            'monthly_cost' => 'nullable|numeric',
            'max_accounts' => 'nullable|integer',
            'port' => 'nullable|integer',
            'nameservers' => 'nullable|json',
            'module_id' => 'required|string',
            'module_username' => 'nullable|string',
            'module_password' => 'nullable|string',
            'module_api_token' => 'nullable|string',
        ]);

        Server::create($validated);

        return to_route('admin.servers.index');
    }

    public function TestConnection(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|min:3|string',
            'hostname' => 'nullable|string',
            'ip_address' => 'nullable|ip',
            'monthly_cost' => 'nullable|numeric',
            'max_accounts' => 'nullable|integer',
            'port' => 'nullable|integer',
            'nameservers' => 'nullable|json',
            'module_id' => 'required|string',
            'module_username' => 'nullable|string',
            'module_password' => 'nullable|string',
            'module_api_token' => 'nullable|string',
        ]);

        $module = Module::find($validated['module_id']);

        if (!$module) {
            return back()->with('error', 'Module not found');
        }

        $moduleService = new ModuleService();
        $module = $moduleService->createModule($module->type);
        $module->initialize($validated);

        try {
            $module->makeApiCall('/api/application/servers');
            return back()->with('success', 'Connection successful');
        } catch (Exception $e) {
            return back()->with('error', 'Connection failed: ' . $e->getMessage());
        }
    }
}
