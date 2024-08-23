<?php

namespace App\Http\Controllers;

use App\Http\Requests\ServerRequest;
use Inertia\Inertia;
use App\Models\Module;
use App\Models\Server;
use App\Services\ModuleService;

class ServersController extends Controller
{
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

    public function updateView(Server $server)
    {
        return Inertia::render('Admin/Settings/Servers/Update', [
            'server' => $server,
            'modules' => Module::all()
        ]);
    }

    public function CreateServer(ServerRequest $request)
    {
        $validated = $request->validated();

        Server::create($validated);

        return to_route('admin.servers.index')->with('success', 'Server created successfully');
    }

    public function TestConnection(ServerRequest $request)
    {
        $validated = $request->validated();

        $module = Module::findOrFail($validated['module_id']);

        $moduleService = new ModuleService();
        $module = $moduleService->createModule($module->type);
        $module->initialize($validated);

        $result = $module->testConnection();
        if (!$result['success']) {
            return back()->with('error', 'Connection failed: ' . $result['message']);
        }

        return back()->with('success', 'Connection successful');
    }

    public function destroy(Server $server)
    {
        $server->delete();

        return redirect()->back()->with('success', 'Server deleted successfully');
    }
}
