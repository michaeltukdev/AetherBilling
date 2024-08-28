<?php

namespace App\Http\Controllers;

use App\Http\Requests\ServerRequest;
use Inertia\Inertia;
use App\Models\Module;
use App\Models\Server;
use App\Services\ModuleService;

class ServersController extends Controller
{
    public function index()
    {
        $servers = Server::with('module')->select('id', 'name', 'hostname', 'ip_address', 'module_id')->get();

        return Inertia::render('Admin/Settings/Servers/Index', [
            'servers' => $servers
        ]);
    }

    public function create()
    {
        return Inertia::render('Admin/Settings/Servers/Create', [
            'modules' => Module::all()
        ]);
    }

    public function store(ServerRequest $request)
    {
        $validated = $request->validated();

        Server::create($validated);

        return to_route('servers.index')->with('success', 'Server created successfully');
    }

    public function destroy(Server $server)
    {
        $server->delete();

        return redirect()->back()->with('success', 'Server deleted successfully');
    }

    public function edit(Server $server)
    {
        return Inertia::render('Admin/Settings/Servers/Edit', [
            'server' => $server,
            'modules' => Module::all()
        ]);
    }

    public function update(ServerRequest $request, Server $server)
    {
        $validated = $request->validated();

        $server->update($validated);

        return to_route('servers.index')->with('success', 'Server updated successfully');
    }

    public function testConnection(ServerRequest $request)
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
}
