import { Tab } from '@headlessui/react';
import { 
  MessageCircle, 
  Terminal, 
  FileText, 
  Hash, 
  Bell, 
  Search, 
  Settings, 
  Phone, 
  Video, 
  Info, 
  Smile, 
  Paperclip, 
  Send, 
  Circle, 
  CheckCircle2,
  Play,
  Square,
  Minimize2,
  Maximize2,
  X,
  User,
  Bot,
  Plus,
  ChevronDown,
  ChevronRight,
  Mic,
  Camera,
  Edit,
  MoreHorizontal,
  Clock,
  AtSign,
  Link,
  Bold,
  Italic,
  Strikethrough,
  List,
  ListOrdered,
  Code,
  Quote,
  Zap,
  Github,
  Calendar
} from 'lucide-react';

function Slack() { 
<div className="transform perspective-1000 rotate-y-2 hover:rotate-y-0 transition-transform duration-500">
                <div className="bg-[#1a1d29] rounded-xl border border-gray-700 overflow-hidden shadow-2xl shadow-purple-500/20 hover:shadow-purple-500/30 transition-shadow duration-300">
                  {/* Slack Window Header */}
                  <div className="bg-[#350d36] px-4 py-2 flex items-center justify-between border-b border-purple-800/30">
                    <div className="flex items-center gap-3">
                      <div className="flex gap-1.5">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      </div>
                      <div className="flex items-center gap-2 ml-4">
                        <div className="w-5 h-5 bg-white rounded flex items-center justify-center">
                          <span className="text-[#350d36] font-bold text-xs">S</span>
                        </div>
                        <span className="text-sm font-medium text-white">Peerbot</span>
                        <ChevronDown className="w-4 h-4 text-gray-300" />
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Settings className="w-4 h-4 text-gray-300 hover:text-white cursor-pointer" />
                      <Edit className="w-4 h-4 text-gray-300 hover:text-white cursor-pointer" />
                    </div>
                  </div>

                  {/* Slack Interface */}
                  <div className="flex h-96">
                    {/* Sidebar */}
                    <div className="w-64 bg-[#19171d] flex flex-col border-r border-gray-700">
                  

                      {/* Channels */}
                      <div className="flex-1 overflow-y-auto">
                        <div className="p-3">
                          <div className="text-xs font-semibold text-gray-400 mb-3 flex items-center gap-2">
                            <ChevronDown className="w-3 h-3" />
                            CHANNELS
                          </div>
                          <div className="space-y-1">
                            <div className="flex items-center gap-2 px-2 py-1 rounded hover:bg-gray-700/50 cursor-pointer">
                              <Hash className="w-4 h-4 text-gray-400" />
                              <span className="text-sm text-gray-300">dbfor-full-stack-dev</span>
                            </div>
                            <div className="flex items-center gap-2 px-2 py-1 rounded hover:bg-gray-700/50 cursor-pointer">
                              <Hash className="w-4 h-4 text-gray-400" />
                              <span className="text-sm text-gray-300">ideation</span>
                            </div>
                            <div className="flex items-center gap-2 px-2 py-1 rounded hover:bg-gray-700/50 cursor-pointer">
                              <Hash className="w-4 h-4 text-gray-400" />
                              <span className="text-sm text-gray-300">inspiration</span>
                            </div>
                          </div>
                          
                        </div>

                        {/* Direct Messages */}
                        <div className="p-3 border-t border-gray-700">
                          <div className="text-xs font-semibold text-gray-400 mb-3 flex items-center gap-2">
                            <ChevronDown className="w-3 h-3" />
                            DIRECT MESSAGES
                          </div>
                          <div className="space-y-1">
                          
                            <div className="flex items-center gap-2 px-2 py-1 rounded hover:bg-gray-700/50 cursor-pointer">
                              <div className="w-6 h-6 bg-orange-500 rounded flex items-center justify-center text-xs font-semibold text-white">
                                B
                              </div>
                              <span className="text-sm text-gray-300">buremba</span>
                              <span className="text-xs text-gray-500 ml-auto">you</span>
                            </div>
                          </div>
                        </div>

                        {/* Apps */}
                        <div className="p-3 border-t border-gray-700">
                          <div className="text-xs font-semibold text-gray-400 mb-3 flex items-center gap-2">
                            <ChevronDown className="w-3 h-3" />
                            APPS
                          </div>
                          <div className="space-y-1">
                            <div className="flex items-center gap-2 px-2 py-1 rounded hover:bg-gray-700/50 cursor-pointer">
                              <div className="w-6 h-6 bg-red-500 rounded flex items-center justify-center">
                                <Bot className="w-4 h-4 text-white" />
                              </div>
                              <span className="text-sm text-gray-300">Slackbot</span>
                            </div>
                            <div className="bg-purple-600/20 border border-purple-500/30 rounded-lg px-2 py-1 flex items-center gap-2">
                              <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded flex items-center justify-center">
                                <Bot className="w-4 h-4 text-white" />
                              </div>
                              <span className="text-sm font-medium text-white">Soham</span>
                              <Circle className="w-2 h-2 fill-green-400 text-green-400 ml-auto" />
                            </div>
                            <div className="px-2 py-1 flex items-center gap-2">
                              <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded flex items-center justify-center">
                                <Bot className="w-4 h-4 text-white" />
                              </div>
                              <span className="text-sm font-medium text-white">ops</span>
                              <Circle className="w-2 h-2 fill-green-400 text-green-400 ml-auto" />
                            </div>
                          </div>
                          
                        </div>
                      </div>
                    </div>

                    {/* Main Chat Area */}
                    <div className="flex-1 flex flex-col bg-[#1a1d29]">
                      {/* Chat Header */}
                      <div className="px-4 py-3 border-b border-gray-700 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded flex items-center justify-center">
                            <Bot className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <div className="font-semibold text-white">Soham</div>
                            <div className="text-xs text-green-400 flex items-center gap-1">
                              <Circle className="w-2 h-2 fill-green-400 text-green-400" />
                              Active
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-1">
                          <div className="flex items-center gap-1 bg-gray-700/50 rounded-lg px-2 py-1">
                            <span className="text-xs text-gray-300">Messages</span>
                          </div>
                          <div className="flex items-center gap-1 px-2 py-1">
                            <span className="text-xs text-gray-400">About</span>
                          </div>
                        </div>
                      </div>

                      {/* Messages */}
                      <div className="flex-1 p-4 space-y-4 overflow-y-auto">
                        {/* Date Separator */}
                        <div className="flex items-center gap-4 my-4">
                          <div className="flex-1 h-px bg-gray-700"></div>
                          <div className="bg-gray-700 text-gray-300 text-xs px-3 py-1 rounded-full">Yesterday</div>
                          <div className="flex-1 h-px bg-gray-700"></div>
                        </div>

                        {/* User Message */}
                        <div className="flex gap-3 hover:bg-gray-800/30 -mx-4 px-4 py-2 rounded">
                          <div className="w-8 h-8 bg-orange-500 rounded flex items-center justify-center text-white font-semibold text-sm">
                            B
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <span className="font-semibold text-white">buremba</span>
                              <span className="text-xs text-gray-500">21:37</span>
                            </div>
                            <div className="text-gray-300">who are you</div>
                          </div>
                        </div>

                        {/* Bot Response with Block Kit */}
                        <div className="flex gap-3 hover:bg-gray-800/30 -mx-4 px-4 py-2 rounded">
                          <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded flex items-center justify-center">
                            <Bot className="w-5 h-5 text-white" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <span className="font-semibold text-white">Soham</span>
                              <span className="text-xs bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded">AI</span>
                              <span className="text-xs text-gray-500">21:37</span>
                            </div>
                            
                            <div className="space-y-3">
                              <div className="text-gray-300">
                                I'm Soham, your AI DevOps assistant! I help you deploy, monitor, and manage your applications directly from Slack. 
                              </div>
                              
                              {/* Block Kit Card */}
                              <div className="bg-gray-800 border border-gray-600 rounded-lg overflow-hidden max-w-md shadow-lg">
                                <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-3">
                                  <div className="flex items-center gap-2">
                                    <Zap className="w-5 h-5 text-white" />
                                    <span className="font-semibold text-white">Quick Actions</span>
                                  </div>
                                </div>
                                <div className="p-4 space-y-3">
                                  <div className="grid grid-cols-2 gap-2">
                                    <button className="bg-green-600 hover:bg-green-700 text-white px-3 py-2 rounded text-sm font-medium transition-colors flex items-center gap-2">
                                      <Play className="w-4 h-4" />
                                      Deploy
                                    </button>
                                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded text-sm font-medium transition-colors flex items-center gap-2">
                                      <Terminal className="w-4 h-4" />
                                      Logs
                                    </button>
                                  </div>
                                  <div className="text-xs text-gray-400">
                                    Type <code className="bg-gray-700 px-1 rounded">/deploy</code> to get started
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Another User Message */}
                        <div className="flex gap-3 hover:bg-gray-800/30 -mx-4 px-4 py-2 rounded">
                          <div className="w-8 h-8 bg-orange-500 rounded flex items-center justify-center text-white font-semibold text-sm">
                            B
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <span className="font-semibold text-white">buremba</span>
                              <span className="text-xs text-gray-500">22:10</span>
                            </div>
                            <div className="bg-gray-800 rounded-lg px-3 py-2 inline-block">
                              <code className="text-blue-300">/deploy staging</code>
                            </div>
                          </div>
                        </div>

                        {/* Bot Deployment Response */}
                        <div className="flex gap-3 hover:bg-gray-800/30 -mx-4 px-4 py-2 rounded">
                          <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded flex items-center justify-center">
                            <Bot className="w-5 h-5 text-white" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <span className="font-semibold text-white">Soham</span>
                              <span className="text-xs bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded">AI</span>
                              <span className="text-xs text-gray-500">22:10</span>
                            </div>
                            
                            {/* Deployment Block Kit */}
                            <div className="bg-gray-800 border border-gray-600 rounded-lg overflow-hidden max-w-lg shadow-lg">
                              <div className="bg-green-600 px-4 py-3">
                                <div className="flex items-center gap-2">
                                  <CheckCircle2 className="w-5 h-5 text-white" />
                                  <span className="font-semibold text-white">Deployment Initiated</span>
                                </div>
                              </div>
                              <div className="p-4 space-y-4">
                                <div className="grid grid-cols-2 gap-4 text-sm">
                                  <div>
                                    <span className="text-gray-400">Environment:</span>
                                    <div className="text-blue-300 font-mono">staging</div>
                                  </div>
                                  <div>
                                    <span className="text-gray-400">Branch:</span>
                                    <div className="text-green-300 font-mono">main</div>
                                  </div>
                                </div>
                                
                                <div className="bg-gray-900 rounded-lg p-3">
                                  <div className="flex items-center justify-between mb-2">
                                    <span className="text-sm font-medium text-white">Build Progress</span>
                                    <span className="text-sm text-blue-400">85%</span>
                                  </div>
                                  <div className="w-full bg-gray-700 rounded-full h-2">
                                    <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-500" style={{width: '85%'}}></div>
                                  </div>
                                </div>
                                
                                <div className="flex gap-2">
                                  <button className="bg-green-600 hover:bg-green-700 text-white px-3 py-1.5 rounded text-sm font-medium transition-colors">
                                    View Logs
                                  </button>
                                  <button className="bg-gray-700 hover:bg-gray-600 text-gray-300 px-3 py-1.5 rounded text-sm font-medium transition-colors">
                                    Cancel
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Message Input */}
                      <div className="border-t border-gray-700 p-4">
                        {/* Formatting Toolbar */}
                        <div className="flex items-center gap-2 mb-3 text-gray-400">
                          <Bold className="w-4 h-4 hover:text-white cursor-pointer" />
                          <Italic className="w-4 h-4 hover:text-white cursor-pointer" />
                          <Strikethrough className="w-4 h-4 hover:text-white cursor-pointer" />
                          <div className="w-px h-4 bg-gray-600 mx-1"></div>
                          <Link className="w-4 h-4 hover:text-white cursor-pointer" />
                          <List className="w-4 h-4 hover:text-white cursor-pointer" />
                          <ListOrdered className="w-4 h-4 hover:text-white cursor-pointer" />
                          <Quote className="w-4 h-4 hover:text-white cursor-pointer" />
                          <Code className="w-4 h-4 hover:text-white cursor-pointer" />
                        </div>
                        
                        <div className="flex items-end gap-3 bg-gray-800 border border-gray-600 rounded-lg p-3">
                          <div className="flex-1">
                            <input 
                              type="text" 
                              placeholder="Message Soham"
                              className="w-full bg-transparent outline-none text-white placeholder-gray-400"
                            />
                          </div>
                          <div className="flex items-center gap-2">
                            <Plus className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
                            <AtSign className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
                            <Smile className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
                            <Mic className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
                            <Camera className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
                            <Send className="w-5 h-5 text-blue-400 hover:text-blue-300 cursor-pointer" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                </div>
}

export default Slack;