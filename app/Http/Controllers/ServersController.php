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
        $servers = Server::with('module')->select('id', 'name', 'hostname', 'ip_address', 'module_id')->get();

        return Inertia::render('Admin/Settings/Servers/Servers', [
            'servers' => $servers
        ]);
    }

    public function CreateView()
    {
        return Inertia::render('Admin/Settings/Servers/Create', [
            'modules' => Module::all()
        ]);
    }

    public function CreateServer(Request $request)
    {
        $rules = $this->getValidationRules();
        $validated = $request->validate($rules);

        Server::create($validated);

        return to_route('admin.servers.index')->with('success', 'Server created successfully');
    }

    public function TestConnection(Request $request)
    {
        $rules = $this->getValidationRules();
        $validated = $request->validate($rules);

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

    public function destroy(Server $server)
    {
        $server->delete();

        return redirect()->back()->with('success', 'Server deleted successfully');
    }

    private function getValidationRules(): array
    {
        return [
            'name' => 'required|min:3|string',
            'hostname' => 'nullable|string',
            'ip_address' => 'nullable|ip|required_without:hostname',
            'monthly_cost' => 'nullable|numeric',
            'max_accounts' => 'nullable|integer',
            'port' => 'nullable|integer',
            'nameservers' => 'nullable|json',
            'module_id' => 'required|string',
            'module_username' => 'nullable|string|required_without:module_api_token',
            'module_password' => 'nullable|string|required_without:module_api_token',
            'module_api_token' => 'nullable|string',
        ];
    }
}
